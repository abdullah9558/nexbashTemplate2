'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';

const links = [
  { href: '#studios', label: 'Studios' },
  { href: '#packages', label: 'Packages' },
  { href: '#process', label: 'Process' },
  { href: '#work', label: 'Projects' },
  { href: '#industries', label: 'Who We Help' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [preferWhite, setPreferWhite] = useState(true);
  const { theme, toggleTheme } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    const el = navRef.current;
    if (!el) return undefined;

    let frame = 0;
    let scrolled = false;
    let onHero = true;

    const syncLogo = (hero) => {
      const white = themeRef.current === 'dark' || hero;
      setPreferWhite((prev) => (prev === white ? prev : white));
    };

    const apply = (nextScrolled, nextOnHero) => {
      if (nextScrolled !== scrolled) {
        scrolled = nextScrolled;
        el.classList.toggle('nav-scrolled', scrolled);
      }
      if (nextOnHero !== onHero) {
        onHero = nextOnHero;
        el.classList.toggle('nav-on-hero', onHero);
        syncLogo(onHero);
      }
    };

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const nextScrolled = y > 48;
      const nextOnHero = !nextScrolled && y < window.innerHeight * 0.5;
      apply(nextScrolled, nextOnHero);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    el.classList.add('nav-on-hero');
    syncLogo(true);
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const el = navRef.current;
    const onHero = el?.classList.contains('nav-on-hero');
    setPreferWhite(theme === 'dark' || !!onHero);
  }, [theme]);

  return (
    <header
      ref={navRef}
      className={`nav nav-on-hero ${theme === 'dark' ? 'nav-dark' : ''}`}
    >
      <div className="nav-inner">
        <a href="#top" className="nav-brand" data-cursor="brand">
          <img
            src="/assets/nexbash-logo.png"
            alt="NexBash"
            className={`nav-logo nav-logo-color ${preferWhite ? 'is-hidden' : ''}`}
          />
          <img
            src="/assets/nexbash-logo-white.png"
            alt="NexBash"
            className={`nav-logo nav-logo-white ${preferWhite ? '' : 'is-hidden'}`}
          />
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} data-cursor="link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="theme-toggle"
          data-cursor="hover"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={toggleTheme}
        >
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
              <path
                d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path
                d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        <a href="#contact" className="nav-cta" data-cursor="cta">
          Get Started
        </a>

        <button
          className="nav-toggle"
          aria-label="Menu"
          data-cursor="hover"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
