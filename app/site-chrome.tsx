import Link from 'next/link';
import Navigation from './navigation';
import { ReplayIntroButton } from './motion-experience';

export function SiteHeader() {
  return (
    <>
      <div className="utility">
        <span>WESTERN NORTH REGION · GHANA</span>
        <span className="utility-right">THE GOLDEN BOYS <i>◆</i> GYE NYAME</span>
      </div>
      <header className="masthead">
        <Link className="brand" href="/#home" aria-label="Bibiani Gold Stars home">
          <img src="/assets/crest.jpg" alt="Bibiani Gold Stars crest" />
          <span><b>GOLDSTARS</b><small>BIBIANI · EST. 1998</small></span>
        </Link>
        <Navigation />
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Link className="brand footer-brand" href="/#home">
        <img src="/assets/crest.jpg" alt="" />
        <span><b>GOLDSTARS</b><small>BIBIANI · EST. 1998</small></span>
      </Link>
      <span>GYE NYAME · EXCEPT THE LORD</span>
      <span>BUILT FOR BIBIANI <b>✦</b></span>
      <Link className="top-link" href="/#home">BACK TO TOP ↑</Link>
      <ReplayIntroButton />
      <small className="source-note">Club facts sourced from the linked Wikipedia article; current squad, fixture, and merchandise information must be confirmed with the club. Concept site, not an official club publication.</small>
    </footer>
  );
}
