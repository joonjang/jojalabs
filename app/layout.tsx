import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joja Labs | Product Portfolio",
  description:
    "Independent product studio by Joon Jang. Spotlighting Learned Growth and future products built from Canada.",
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
