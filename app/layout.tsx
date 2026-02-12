import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Korra Software System",
  description: "Automated software system for Korra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
