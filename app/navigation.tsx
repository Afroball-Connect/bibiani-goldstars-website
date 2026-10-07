'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const section = (id: string) => `${pathname === '/' ? '' : '/'}#${id}`;
  const close = () => setOpen(false);

  return (
    <>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="primary-nav"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        onClick={() => setOpen(!open)}
      >
        <span /><span />
      </button>
      <nav id="primary-nav" className={open ? 'open' : ''} aria-label="Main navigation">
        <Link href={section('latest')} onClick={close}>Latest</Link>
        <Link href={section('match-centre')} onClick={close}>Match centre</Link>
        <Link href="/squad" aria-current={pathname === '/squad' ? 'page' : undefined} onClick={close}>Squad</Link>
        <Link href="/shop" aria-current={pathname === '/shop' ? 'page' : undefined} onClick={close}>Shop</Link>
        <Link href={section('club')} onClick={close}>The club</Link>
        <Link href={section('honours')} onClick={close}>Honours</Link>
        <Link className="nav-cta" href={section('support')} onClick={close}>Stand with us <span>↗</span></Link>
      </nav>
    </>
  );
}
