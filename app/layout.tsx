import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cogniv — AI-Powered Cybersecurity for Enterprise",
    template: "%s | Cogniv",
  },
  description:
    "Protect your infrastructure with real-time, AI-driven threat detection. Next-gen cybersecurity platform for enterprise data.",
  keywords: [
    "AI cybersecurity",
    "threat detection",
    "enterprise security",
    "zero-trust architecture",
    "automated incident response",
  ],
  authors: [{ name: "Cogniv" }],
  openGraph: {
    title: "Cogniv — AI-Powered Cybersecurity for Enterprise",
    description:
      "Protect your infrastructure with real-time, AI-driven threat detection.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cogniv — AI-Powered Cybersecurity for Enterprise",
    description:
      "Protect your infrastructure with real-time, AI-driven threat detection.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
