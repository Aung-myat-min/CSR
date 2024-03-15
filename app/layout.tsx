import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./themes/providers";
import NavigationBar from "@/components/Nav";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GUSTO-CSR",
  description: "This Website shows the work of CSR Organizaiton",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="bg-background text-content dark:bg-content dark:text-background">
        <SpeedInsights />
        <div className="flex flex-col h-screen justify-between">
          <Providers>
            <NavigationBar />
            {children}
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
