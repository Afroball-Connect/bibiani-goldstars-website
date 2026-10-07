import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter, SiteHeader } from '../site-chrome';
import SquadRoster from './squad-roster';

export const metadata: Metadata = {
  title: 'Sample squad | Bibiani Gold Stars SC',
  description: 'A fictional demonstration of a Bibiani Gold Stars squad page. Player ages, heights, preferred feet and favourite foods are invented sample data.',
};

export default function SquadPage() {
  return (
    <>
      <SiteHeader />
      <main className="club-subpage squad-page">
        <section className="subpage-hero squad-page-hero">
          <div className="subpage-hero-copy">
            <p className="eyebrow"><span className="gold-dot" /> ILLUSTRATIVE SQUAD PAGE · DEMO ONLY</p>
            <h1>MEET THE<br /><em>GOLDEN BOYS.</em></h1>
            <p>A fictional sample roster and staff directory, designed to show what a finished Gold Stars team page could look like.</p>
            <div className="subpage-hero-meta"><span>WESTERN NORTH · GHANA</span><span>SAMPLE DATA · NOT OFFICIAL PERSONNEL</span></div>
          </div>
        </section>

        <SquadRoster />

        <section className="subpage-next-links" aria-label="Explore more">
          <Link href="/">Back to the club <span>↗</span></Link>
          <Link href="/shop">Visit the shop concept <span>↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
