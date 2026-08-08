

// Build a search-engine-friendly page <title> capped at 60 characters.
// Keeps the full descriptive title, only dropping the brand suffix (or
// truncating at a word boundary with an ellipsis) when it would overflow.
// The length check is HTML-entity aware: `&` renders as `&amp;` in the served
// HTML (5 chars instead of 1), so titles containing `&` stay within the limit.
export function buildSeoTitle(
  title: string,
  brand: string = " | DevFlow Technology",
): string {
  const MAX = 60;
  const encodedLength = (s: string) => s.replace(/&/g, "&amp;").length;
  const withBrand = `${title}${brand}`;
  if (encodedLength(withBrand) <= MAX) return withBrand;
  if (encodedLength(title) <= MAX) return title;
  // Truncate at a word boundary, keeping the encoded length (incl. ellipsis)
  // within MAX.
  let candidate = title;
  while (candidate.length > 20) {
    const space = candidate.lastIndexOf(" ");
    if (space < 0) break;
    candidate = candidate
      .slice(0, space)
      .replace(/[\s,;:.!?-]+$/, "");
    if (encodedLength(`${candidate}…`) <= MAX) return `${candidate}…`;
  }
  return `${title.slice(0, MAX - 1)}…`;
}
