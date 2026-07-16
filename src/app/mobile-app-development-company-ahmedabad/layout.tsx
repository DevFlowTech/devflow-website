import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Company Ahmedabad | iOS, Android, Flutter, React Native",
  description: "Top mobile app development company in Ahmedabad, Gujarat. Native iOS (Swift), Android (Kotlin), Flutter & React Native cross-platform apps. Serving Ahmedabad, Gandhinagar, Surat, Vadodara & all Gujarat.",
  keywords: [
    "mobile app development company Ahmedabad",
    "mobile app development Ahmedabad",
    "iOS app development Ahmedabad",
    "Android app development Ahmedabad",
    "Flutter app development Ahmedabad",
    "React Native development Ahmedabad",
    "cross platform app development Gujarat",
    "app development company Gujarat",
    "mobile app developers Ahmedabad",
    "hire app developers Ahmedabad",
    "custom mobile app development Gujarat",
    "enterprise mobile apps Ahmedabad",
    "app UI/UX design Ahmedabad",
    "app maintenance support Ahmedabad",
  ],
  openGraph: {
    title: "Mobile App Development Company Ahmedabad | DevFlow Technology",
    description: "Leading mobile app development company in Ahmedabad building native iOS, Android, Flutter & React Native apps for Gujarat enterprises.",
    type: "website",
    images: [{ url: "https://devflow.co.in/og-image.png", width: 1200, height: 630, alt: "DevFlow Technology - Mobile App Development Company Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Company Ahmedabad | DevFlow Technology",
    description: "Top mobile app development company in Ahmedabad, Gujarat. Native iOS, Android, Flutter & React Native apps.",
    images: ["https://devflow.co.in/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://devflow.co.in/mobile-app-development-company-ahmedabad" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
