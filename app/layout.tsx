import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AppNav from "@/components/AppNav";
import BrandMark from "@/components/BrandMark";
import UserBadge from "@/components/UserBadge";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "ClaimEase", template: "%s · ClaimEase" },
  description: "Describe a work expense in plain language and submit it as a claim.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-10 border-b border-border bg-surface/90 backdrop-blur">
          <div className="mx-auto grid w-full max-w-5xl grid-cols-[1fr_auto] items-center gap-x-4 gap-y-3 px-4 py-3 sm:grid-cols-[auto_1fr_auto]">
            <BrandMark />
            <AppNav className="col-span-2 row-start-2 sm:col-span-1 sm:row-start-1 sm:col-start-2 sm:justify-self-center" />
            <UserBadge />
          </div>
        </header>
        <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-6 sm:py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
