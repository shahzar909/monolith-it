import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Header from "@/components/headers/Header1";

export const metadata: Metadata = {
  title: "Monolith IT Company - Enterprise Software Solutions & IT Services",
  description:
    "Monolith is a leading IT company specializing in software development, cloud services, AI automation, cybersecurity, and digital transformation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans antialiased overflow-x-hidden bg-black text-white">
        
        {/* GLOBAL HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        {children}

      </body>
    </html>
  );
}
