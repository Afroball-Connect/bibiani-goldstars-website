'use client';

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';

const introEvent = 'goldstars:replay-intro';
const playedKey = 'goldstars-intro-played';

export default function MotionExperience({ children }: { children: ReactNode }) {
  const [introVisible, setIntroVisible] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dismiss = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    setIntroVisible(false);
    try { sessionStorage.setItem(playedKey, 'yes'); } catch { /* Storage may be unavailable; the intro still dismisses. */ }
  }, []);

  const replay = useCallback(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (timer.current) clearTimeout(timer.current);
    setIntroVisible(true);
    timer.current = setTimeout(() => setIntroVisible(false), 2300);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let previouslyPlayed = false;
    try { previouslyPlayed = sessionStorage.getItem(playedKey) === 'yes'; } catch { /* Treat this as a first visit. */ }
    if (!reduced && !previouslyPlayed) {
      setIntroVisible(true);
      try { sessionStorage.setItem(playedKey, 'yes'); } catch { /* Skip persistence if storage is blocked. */ }
      timer.current = setTimeout(() => setIntroVisible(false), 2300);
    }

    const onReplay = () => replay();
    window.addEventListener(introEvent, onReplay);

    const targets = document.querySelectorAll<HTMLElement>(
      '.hero-content, .match-card, .story-feature, .story-strip article, .honour-row, .club-layout, .support > div',
    );
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('motion-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -28px 0px' });
      targets.forEach((target) => { target.classList.add('motion-in'); observer.observe(target); });
      document.body.classList.add('motion-ready');
      return () => {
        observer.disconnect();
        document.body.classList.remove('motion-ready');
        window.removeEventListener(introEvent, onReplay);
        if (timer.current) clearTimeout(timer.current);
      };
    }

    targets.forEach((target) => target.classList.add('motion-visible'));
    return () => {
      window.removeEventListener(introEvent, onReplay);
      if (timer.current) clearTimeout(timer.current);
    };
  }, [dismiss, replay]);

  useEffect(() => {
    if (!introVisible) return;
    const skipButton = document.querySelector<HTMLButtonElement>('.intro-skip');
    skipButton?.focus();
    const handleIntroKeys = (event: KeyboardEvent) => {
      if (event.key === 'Escape') dismiss();
      if (event.key === 'Tab') { event.preventDefault(); skipButton?.focus(); }
    };
    window.addEventListener('keydown', handleIntroKeys);
    return () => window.removeEventListener('keydown', handleIntroKeys);
  }, [introVisible, dismiss]);

  return <>{children}{introVisible && <div className="intro-overlay" role="dialog" aria-modal="true" aria-label="Bibiani Gold Stars introduction"><div className="intro-orbit intro-orbit-one"/><div className="intro-orbit intro-orbit-two"/><div className="intro-flare"/><div className="intro-emblem"><img src="/assets/crest.jpg" alt=""/></div><p className="intro-kicker">WESTERN NORTH · GHANA</p><p className="intro-title">BIBIANI <span>GOLDSTARS</span></p><p className="intro-tagline">ONE TOWN. ONE TEAM. ONE GOLD STANDARD.</p><button className="intro-skip" onClick={dismiss}>Skip intro <span>↗</span></button><div className="intro-wipe"/></div>}</>;
}

export function ReplayIntroButton() {
  return <button className="replay-intro" type="button" onClick={() => window.dispatchEvent(new Event(introEvent))}>REPLAY INTRO ↗</button>;
}
