import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "John Jeffrey Baclay | Frontend & Full-Stack Developer",
  description:
    "Portfolio of John Jeffrey Baclay, a Frontend and Full-Stack Developer from Cebu, Philippines, specializing in modern web applications, e-commerce, and digital experiences.",
  openGraph: {
    title: "John Jeffrey Baclay | Frontend & Full-Stack Developer",
    description:
      "Portfolio of John Jeffrey Baclay, a Frontend and Full-Stack Developer from Cebu, Philippines, specializing in modern web applications, e-commerce, and digital experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-white">{children}</body>
    </html>
  );
}
