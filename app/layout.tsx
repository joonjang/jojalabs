import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
   title: 'Joja Labs',
   description:
      'Independent product studio based in Vancouver. Spotlighting Learned Growth and future products built from Canada.',
   openGraph: {
      title: 'Joja Labs | Independent Product Studio',
      description: 'Independent product studio based in Vancouver. Spotlighting Learned Growth and future products built from Canada.',
      siteName: 'Joja Labs',
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Joja Labs | Independent Product Studio',
      description: 'Independent product studio based in Vancouver. Spotlighting Learned Growth and future products built from Canada.',
   },
   icons: {
      icon: [{ url: '/joja-icon.svg?v=2', type: 'image/svg+xml' }],
      shortcut: '/joja-icon.svg?v=2',
      apple: '/joja-icon.svg?v=2',
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body>
            {children}
            <Analytics />
         </body>
      </html>
   );
}
