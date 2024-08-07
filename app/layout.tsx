import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GUSTO-CSR",
  description: "This Website shows the work of GUSTO CSR Organizaiton",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body
        style={{ scrollBehavior: "smooth" }}
        className="bg-background text-content dark:bg-content dark:text-background"
      >
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
