'use client';

import { useEffect, useState } from 'react';

/**
 * Auto-advance an index when the section is in view, not paused, and
 * the user has not requested reduced motion.
 */
export function useAutoCycle({
  total,
  interval = 5000,
  paused = false,
  sectionRef = null,
} = {}) {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(() => !sectionRef);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const el = sectionRef?.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio > 0.35),
      { threshold: [0, 0.35, 0.6] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [sectionRef]);

  useEffect(() => {
    if (!total || paused || !inView || reducedMotion) return undefined;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % total);
    }, interval);
    return () => clearInterval(timer);
  }, [total, paused, inView, reducedMotion, interval]);

  const go = (dir) => {
    if (!total) return;
    setActive((i) => (i + dir + total) % total);
  };

  return { active, setActive, go, reducedMotion };
}
