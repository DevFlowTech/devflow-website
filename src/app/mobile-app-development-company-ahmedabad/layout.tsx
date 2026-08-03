import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Mobile App Development Company Ahmedabad | DevFlow" },
  description: "Top mobile app development company in Ahmedabad, Gujarat. Native iOS, Android, Flutter & React Native cross-platform apps.",
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
    images: [{ url: "https://www.devflow.co.in/og-image.jpg", width: 1200, height: 630, alt: "DevFlow Technology - Mobile App Development Company Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Company Ahmedabad | DevFlow Technology",
    description: "Top mobile app development company in Ahmedabad, Gujarat. Native iOS, Android, Flutter & React Native apps.",
    images: ["https://www.devflow.co.in/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.devflow.co.in/mobile-app-development-company-ahmedabad" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
