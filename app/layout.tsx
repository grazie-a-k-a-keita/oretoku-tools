import { AppConfig } from '@/app.config';
import { ThemeProvider } from '@/components/theme-provider';
import { cn, getURL } from '@/lib/utils';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
  metadataBase: new URL(getURL()),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <meta name='google-site-verification' content='WrixKoEfjuRBMfWSj8SGE01gpJ-zxESUvUHqkqWYn3E' />
      </head>
      <html lang='ja' suppressHydrationWarning>
        <body className={cn(notoSansJp.className, 'h-dvh flex flex-col')} suppressHydrationWarning>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
