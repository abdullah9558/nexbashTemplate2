'use client';

import { useEffect, useRef, useState } from 'react';

export default function CursorFollower() {
  const glowRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;

    setVisible(true);

    const onMove = (e) => {
      const el = glowRef.current;
      if (!el) return;
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  if (!visible) return null;

  return <div className="cursor-follower" ref={glowRef} aria-hidden="true" />;
}
