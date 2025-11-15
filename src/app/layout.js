// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "@fontsource/stack-sans-headline/400.css";
import "@fontsource/stack-sans-headline/700.css";
import "./globals.css";
import Navbar from "./Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ❌ REMOVE this – we don't use next/font for Stack Sans Headline
// const StackSansHeadline = Stack_Sans_Headline({...});

export const metadata = {
  title: "Jana Yasser",
  description: "A showcase of Jana Yasser’s work through the years.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
