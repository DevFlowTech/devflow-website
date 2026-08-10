import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact DevFlow Technology | Hire Software & AI Developers Ahmedabad",
  description:
    "Get in touch with DevFlow Technology to discuss your custom software, AI system, or ERP development project. Based in Ahmedabad, Gujarat — serving global clients.",
  keywords: [
    "contact DevFlow Technology",
    "hire software developers Ahmedabad",
    "AI development consultation India",
    "custom software quote India",
    "DevFlow contact",
    "schedule software consultation",
  ],
  alternates: { canonical: "https://www.devflow.co.in/contact" },
  openGraph: {
    title: "Contact DevFlow Technology | Custom Software & AI Development",
    description:
      "Talk directly with DevFlow's engineers about your project. No sales layers — direct access to the architects building your software.",
    url: "https://www.devflow.co.in/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
