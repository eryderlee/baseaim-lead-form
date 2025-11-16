import type { Metadata } from "next";
import {
  Inter,
  Poppins,
  Montserrat,
  DM_Serif_Display,
  Work_Sans,
  JetBrains_Mono
} from "next/font/google";
import "./globals.css";

// Font configurations
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baseaim - AI Automation Lead Form",
  description: "Get started with AI automation for your business. Contact Baseaim for custom AI solutions, workflow automation, and AI consulting services.",
  keywords: ["AI automation", "workflow automation", "AI consulting", "business automation", "AI agents"],
  authors: [{ name: "Baseaim" }],
  openGraph: {
    title: "Baseaim - AI Automation Lead Form",
    description: "Transform your business with AI automation. Get in touch with Baseaim for custom AI solutions.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${montserrat.variable} ${dmSerif.variable} ${workSans.variable} ${jetbrainsMono.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
