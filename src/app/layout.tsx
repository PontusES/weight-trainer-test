import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { SwapiProvider } from '@/contexts/swapiContext';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

export const metadata: Metadata = {
  title: 'Star Wars Fun Facts App',
  description: 'A Star Wars themed fun facts app using Next.js',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geist.variable} font-sans`}>
        <SwapiProvider>{children}</SwapiProvider>
      </body>
    </html>
  );
}
