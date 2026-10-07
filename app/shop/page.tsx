import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SiteFooter, SiteHeader } from '../site-chrome';

export const metadata: Metadata = {
  title: 'Shop concept | Bibiani Gold Stars SC',
  description: 'A preview of a future Bibiani Gold Stars supporter shop. Products, prices, stock and checkout have not yet been confirmed.',
};

const concepts = [
  { id: 'shirt', number: '01', category: 'MATCHDAY', title: 'The home shirt', note: 'AI-generated kit concept', image: '/assets/shop-concepts/goldstars-home-shirt-concept.webp', alt: 'AI-generated concept image of a blank forest-green and gold football shirt; not official club merchandise', tag: 'CONCEPT ONLY' },
  { id: 'scarf', number: '02', category: 'SUPPORTER ESSENTIAL', title: 'Gold & green scarf', note: 'AI-generated supporter concept', image: '/assets/shop-concepts/goldstars-supporter-scarf-concept.webp', alt: 'AI-generated concept image of a blank forest-green and gold supporters’ scarf; not official club merchandise', tag: 'CONCEPT ONLY' },
  { id: 'training', number: '03', category: 'TRAINING', title: 'The training top', note: 'AI-generated training-wear concept', image: '/assets/shop-concepts/goldstars-training-top-concept.webp', alt: 'AI-generated concept image of a blank forest-green training pullover with gold trim; not official club merchandise', tag: 'CONCEPT ONLY' },
  { id: 'cap', number: '04', category: 'STAND ESSENTIAL', title: 'Gold Stars cap', note: 'AI-generated supporters’ cap concept', image: '/assets/shop-concepts/goldstars-supporter-cap-concept.webp', alt: 'AI-generated concept image of a blank forest-green cap with a gold bill; not official club merchandise', tag: 'CONCEPT ONLY' },
];

export default function ShopPage() {
  return (
    <>
      <SiteHeader />
      <main className="club-subpage shop-page">
        <section className="subpage-hero shop-page-hero">
          <div className="subpage-hero-copy">
            <p className="eyebrow"><span className="gold-dot" /> SUPPORTER STORE · CONCEPT</p>
            <h1>WEAR THE GOLD.<br /><em>CARRY BIBIANI.</em></h1>
            <p>A first look at what a Gold Stars supporter shop could feel like. This is a design preview—not a live catalogue or an official range.</p>
            <a className="button button-yellow" href="#shop-preview">Explore the concepts <span>↓</span></a>
          </div>
          <div className="shop-hero-stamp" aria-hidden="true"><span>GS</span><b>ONE TOWN<br />ONE TEAM</b></div>
        </section>

        <section className="shop-disclosure" aria-label="Store status">
          <span className="shop-disclosure-icon" aria-hidden="true">i</span>
          <p><strong>Preview only.</strong> These AI-generated images are product concepts, not club-approved merchandise. Nothing shown is for sale; this page does not take orders or payments.</p>
          <span className="shop-status-label">STORE NOT LIVE</span>
        </section>

        <section className="shop-catalogue section" id="shop-preview" aria-labelledby="shop-title">
          <div className="section-head"><p className="eyebrow">01 / THE CONCEPT RANGE</p><span className="live-tag">4 DESIGN DIRECTIONS</span></div>
          <div className="shop-catalogue-heading"><h2 id="shop-title">FOR THE STANDS.<br /><em>FOR THE STREETS.</em></h2><p>Green, gold and Bibiani—imagined for matchday and beyond. Every design still needs the club’s approval.</p></div>
          <div className="concept-grid">
            {concepts.map((item) => (
              <article className="concept-card" key={item.id}>
                <div className={`concept-art concept-art-${item.id}`}>
                  <span className="concept-number">{item.number} / GOLD STARS</span>
                  <Image src={item.image} alt={item.alt} width={1254} height={1254} sizes="(max-width: 360px) 88vw, (max-width: 700px) 44vw, (max-width: 1050px) 44vw, 22vw" className="concept-product-image" />
                  <span className="concept-tag">{item.tag}</span>
                </div>
                <div className="concept-copy">
                  <div className="concept-overline"><span>{item.category}</span><span>PRICE TBC</span></div>
                  <h3>{item.title}</h3>
                  <p>{item.note} · not an official club product</p>
                  <span className="concept-unavailable" aria-label="Not available to buy">NOT ON SALE</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="shop-readiness">
          <div><p className="eyebrow">02 / BEFORE ORDERS OPEN</p><h2>A proper shop<br />needs <em>proper details.</em></h2></div>
          <div className="readiness-copy">
            <p>Before supporters can buy, the club must confirm the official designs, prices in GHS, sizes and live stock, then choose how orders will be fulfilled.</p>
            <ul>
              <li><span>01</span> Club-approved products &amp; supplier</li>
              <li><span>02</span> Prices, sizes &amp; stock availability</li>
              <li><span>03</span> Ghana delivery or collection options</li>
              <li><span>04</span> Confirmed ordering and payment route</li>
            </ul>
            <p className="readiness-footnote">MoMo, card payments and order confirmation should only be shown once the club’s merchant and fulfilment setup is in place.</p>
          </div>
        </section>
        <section className="subpage-next-links" aria-label="Explore more">
          <Link href="/">Back to the club <span>↗</span></Link>
          <Link href="/squad">Meet the squad <span>↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
