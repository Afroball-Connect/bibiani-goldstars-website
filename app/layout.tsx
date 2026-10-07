import type { Metadata, Viewport } from 'next';
import './globals.css';
import './squad/squad.css';
import MotionExperience from './motion-experience';

export const viewport: Viewport = { themeColor: '#073d24' };

export const metadata: Metadata = {
  title: 'Bibiani Gold Stars SC | The Golden Boys',
  description: 'The home of Bibiani Gold Stars SC — Ghana Premier League champions, rooted in Bibiani, Western North Region.',
  applicationName: 'Bibiani Gold Stars SC',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: { title: 'Bibiani Gold Stars SC | The Golden Boys', description: 'From Bibiani to the summit of Ghanaian football. This is the home of the Golden Boys.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><MotionExperience>{children}</MotionExperience></body></html>;
}
