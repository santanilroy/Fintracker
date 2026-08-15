import type { Metadata } from "next";
import { Roboto, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/SmoothScroll";
import { Providers } from "@/app/Provider";
import { Analytics } from "@vercel/analytics/react";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fintracker-yourname.vercel.app"), // swap in your real deployed URL
  title: {
    default: "Fintracker · Track your money with clarity",
    template: "%s · Fintracker",
  },
  description:
    "Fintracker is a personal finance tracker for logging income and expenses, spotting spending patterns, and staying on top of your money — built with Next.js, TypeScript, and PostgreSQL.",
  keywords: [
    "finance tracker",
    "expense tracker",
    "personal finance app",
    "budget tracker",
    "income and expense tracker",
    "money management app",
  ],
  authors: [{ name: "Santanil Roy" }],
  creator: "Santanil Roy",
  openGraph: {
    title: "Fintracker · Track your money with clarity",
    description:
      "Log income and expenses, spot spending patterns, and stay on top of your money — all in one clean dashboard.",
    url: "https://fintracker-yourname.vercel.app",
    siteName: "Fintracker",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fintracker · Track your money with clarity",
    description:
      "Log income and expenses, spot spending patterns, and stay on top of your money.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(geist.variable, roboto.variable, "antialiased")}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Providers>
          <SmoothScroll>{children}</SmoothScroll>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
