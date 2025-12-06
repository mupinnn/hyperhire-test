import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Noto_Sans_KR } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['900'],
  variable: '--font-poppins',
});

const notoSansKR = Noto_Sans_KR({
  subsets: ['cyrillic'],
  display: 'swap',
  weight: ['900'],
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  title: 'Hyperhire',
  description: 'Your trusted staffing & development partner.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${poppins.variable} ${notoSansKR.variable} antialiased`}>
        <main className="min-h-svh flex flex-col">{children}</main>
      </body>
    </html>
  );
}
