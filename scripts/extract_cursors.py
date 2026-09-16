import os
import struct
import io
import json
from PIL import Image

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
CURSOR_DIR = os.path.join(PROJECT_ROOT, "cursor")
OUTPUT_DIR = os.path.join(PROJECT_ROOT, "public", "cursors")

MAPPINGS = {
    "default": "Normal_32-48-64.ani",
    "pointer": "Link_32-48-64.ani",
    "pointer_alt": "Link_1_32-48-64.ani",
    "text": "Text_32-48-64.ani",
    "wait": "Wait_32-48-64.ani",
    "progress": "AppStarting_32-48-64.ani",
    "not-allowed": "NotAllowed_32-48-64.ani",
    "move": "Move_32-48-64.ani",
    "help": "Help_32-48-64.ani",
    "zoom-in": "zoom-in_32-48-64.ani",
    "zoom-out": "zoom-out_32-48-64.ani",
    "crosshair": "Precision_32-48-64.ani",
    "copy": "copy_32-48-64.ani",
    "alias": "alias_32-48-64.ani",
    "context-menu": "context-menu_32-48-64.ani",
    "ew-resize": "EWResize_32-48-64.ani",
    "ns-resize": "NSResize_32-48-64.ani",
    "nesw-resize": "NEResize_32-48-64.ani",
    "nwse-resize": "NWResize_32-48-64.ani",
}

def parse_ani(file_path):
    with open(file_path, "rb") as f:
        data = f.read()

    pos = 12
    frames_32 = []
    frames_48 = []
    hotspot_32 = (0, 0)
    hotspot_48 = (0, 0)
    jif_rate = 2

    while pos < len(data):
        chunk_id, chunk_size = struct.unpack("<4sI", data[pos:pos+8])
        pos += 8

        if chunk_id == b"anih":
            anih = struct.unpack("<9I", data[pos:pos+36])
            jif_rate = anih[7] or 2
        elif chunk_id == b"LIST":
            subpos = pos + 4
            while subpos < pos + chunk_size:
                sub_id, sub_size = struct.unpack("<4sI", data[subpos:subpos+8])
                icon_data = data[subpos+8:subpos+8+sub_size]
                idReserved, idType, idCount = struct.unpack("<HHH", icon_data[:6])

                # Entry 0: 32x32
                entry0 = icon_data[6:22]
                _, _, _, _, hsX0, hsY0, dwBytes0, offset0 = struct.unpack("<BBBBHHII", entry0)
                hotspot_32 = (hsX0, hsY0)
                slice0 = icon_data[offset0:offset0+dwBytes0]
                img0 = Image.open(io.BytesIO(slice0)).convert("RGBA")
                frames_32.append(img0)

                # Entry 1: 48x48 if present
                if idCount > 1:
                    entry1 = icon_data[22:38]
                    _, _, _, _, hsX1, hsY1, dwBytes1, offset1 = struct.unpack("<BBBBHHII", entry1)
                    hotspot_48 = (hsX1, hsY1)
                    slice1 = icon_data[offset1:offset1+dwBytes1]
                    img1 = Image.open(io.BytesIO(slice1)).convert("RGBA")
                    frames_48.append(img1)

                subpos += 8 + sub_size
                if sub_size % 2 == 1:
                    subpos += 1
        pos += chunk_size
        if chunk_size % 2 == 1:
            pos += 1

    duration_ms = max(20, int(round((jif_rate / 60.0) * 1000)))
    return {
        "frames_32": frames_32,
        "frames_48": frames_48,
        "hotspot_32": hotspot_32,
        "hotspot_48": hotspot_48,
        "duration_ms": duration_ms,
    }

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    manifest = {}

    print(f"Extracting cursors from {CURSOR_DIR} -> {OUTPUT_DIR}...")

    for key, ani_name in MAPPINGS.items():
        ani_path = os.path.join(CURSOR_DIR, ani_name)
        if not os.path.exists(ani_path):
            print(f"Skipping missing: {ani_name}")
            continue

        result = parse_ani(ani_path)
        f32 = result["frames_32"]
        f48 = result["frames_48"]
        hs32 = result["hotspot_32"]
        hs48 = result["hotspot_48"]
        dur = result["duration_ms"]

        if not f32:
            print(f"Warning: No frames found for {ani_name}")
            continue

        # Save 32x32 static PNG
        png_32_filename = f"{key}_32.png"
        f32[0].save(os.path.join(OUTPUT_DIR, png_32_filename), optimize=True)

        # Save 32x32 animated WebP
        webp_32_filename = f"{key}_32.webp"
        f32[0].save(
            os.path.join(OUTPUT_DIR, webp_32_filename),
            save_all=True,
            append_images=f32[1:],
            duration=dur,
            loop=0,
            transparency=0,
            disposal=2,
            lossless=True,
        )

        # If 48x48 frames exist
        webp_48_filename = None
        png_48_filename = None
        if f48:
            png_48_filename = f"{key}_48.png"
            f48[0].save(os.path.join(OUTPUT_DIR, png_48_filename), optimize=True)

            webp_48_filename = f"{key}_48.webp"
            f48[0].save(
                os.path.join(OUTPUT_DIR, webp_48_filename),
                save_all=True,
                append_images=f48[1:],
                duration=dur,
                loop=0,
                transparency=0,
                disposal=2,
                lossless=True,
            )

        manifest[key] = {
            "source": ani_name,
            "hotspot": [hs32[0], hs32[1]],
            "hotspot48": [hs48[0], hs48[1]] if f48 else [hs32[0], hs32[1]],
            "png": f"/cursors/{png_32_filename}",
            "webp": f"/cursors/{webp_32_filename}",
            "webp48": f"/cursors/{webp_48_filename}" if webp_48_filename else f"/cursors/{webp_32_filename}",
            "frames": len(f32),
            "duration": dur,
        }
        print(f"Extracted [{key}]: {len(f32)} frames @ {dur}ms, hotspot={hs32}")

    # Write manifest JSON
    manifest_path = os.path.join(OUTPUT_DIR, "cursors.json")
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)

    print(f"\nManifest successfully written to {manifest_path}")
    print(f"Total cursors processed: {len(manifest)}")

if __name__ == "__main__":
    main()
