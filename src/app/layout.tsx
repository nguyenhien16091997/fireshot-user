'use client';
import Header from '@/components/Header';
import { Montserrat } from 'next/font/google';
import ThemeRegistry from './ThemeRegistry';
import './globals.css';
const montserrat = Montserrat({ subsets: ['latin', 'vietnamese'] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeRegistry
          options={{ key: 'mui' }}
          fontFamily={montserrat.style.fontFamily}
        >
          <Header />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
