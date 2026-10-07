import type { Metadata, Viewport } from 'next';
import './globals.css';
import './squad/squad.css';
import MotionExperience from './motion-experience';

export const viewport: Viewport = { themeColor: '#073d24' };

export const metadata: Metadata = {
  title: 'Bibiani Gold Stars SC | The Golden Boys',
  description: 'The home of Bibiani Gold Stars SC — Ghana Premier League champions, rooted in Bibiani, Western North Region.',
  applicationName: 'Bibiani Gold Stars SC',
  openGraph: { title: 'Bibiani Gold Stars SC | The Golden Boys', description: 'From Bibiani to the summit of Ghanaian football. This is the home of the Golden Boys.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><MotionExperience>{children}</MotionExperience></body></html>;
}
