import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { AppSidebar } from '@/components/app-sidebar';
import Player from '@/components/player';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'TuneFlow',
  description: 'A Spotify 2.0 Clone Music App with enhanced features.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={cn('font-body antialiased overflow-hidden')}>
        <div className="flex h-screen w-full">
          <AppSidebar />
          <main className="flex-1 flex flex-col h-screen">
            <div className="flex-1 overflow-y-auto">{children}</div>
            <Player />
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
