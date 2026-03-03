import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joja Labs | Product Portfolio",
  description:
    "Independent product studio by Joon Jang. Spotlighting Learned Growth and future products built from Canada.",
  icons: {
    icon: [{ url: "/joja-icon.svg", type: "image/svg+xml" }],
    shortcut: "/joja-icon.svg",
    apple: "/joja-icon.svg",
  },
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
