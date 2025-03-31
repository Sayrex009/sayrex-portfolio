import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sayrex portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-purple-600 overflow-y-scroll overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
