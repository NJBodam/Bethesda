import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bethesda House of Grace",
  description: "Welcome to Bethesda House of Grace Church",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
