'use client';

import { useCallback, useRef, useState } from 'react';

/**
 * Pointer drag with live pixel offset for sliding carousels.
 * Capture starts only after real movement so nested click targets still work.
 * Offset updates are rAF-throttled; release uses distance + velocity for easier swipes.
 */
export function useDragSwipe({ onSwipe, onDragStart, onDragEnd, threshold = 48 } = {}) {
  const startX = useRef(null);
  const startY = useRef(null);
  const dragging = useRef(false);
  const armed = useRef(false);
  const suppressClick = useRef(false);
  const activePointer = useRef(null);
  const targetRef = useRef(null);
  const offsetRef = useRef(0);
  const lastX = useRef(0);
  const lastT = useRef(0);
  const velocity = useRef(0);
  const rafRef = useRef(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const flushOffset = useCallback(() => {
    rafRef.current = 0;
    setDragOffset(offsetRef.current);
  }, []);

  const onPointerDown = useCallback((e) => {
    if (e.button != null && e.button !== 0) return;
    if (e.target?.closest?.('a, input, textarea, select, .studio-dot, .ind-thumb, .btn-view-all')) {
      return;
    }

    startX.current = e.clientX;
    startY.current = e.clientY;
    lastX.current = e.clientX;
    lastT.current = performance.now();
    velocity.current = 0;
    armed.current = true;
    dragging.current = false;
    activePointer.current = e.pointerId;
    targetRef.current = e.currentTarget;
    offsetRef.current = 0;
  }, []);

  const onPointerMove = useCallback(
    (e) => {
      if (!armed.current || startX.current == null) return;
      if (activePointer.current != null && e.pointerId !== activePointer.current) return;

      const dx = e.clientX - startX.current;
      const dy = e.clientY - startY.current;

      if (!dragging.current) {
        if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
        // Vertical scroll intent — abandon drag
        if (Math.abs(dy) > Math.abs(dx) * 1.25) {
          armed.current = false;
          return;
        }
        dragging.current = true;
        setIsDragging(true);
        targetRef.current?.setPointerCapture?.(e.pointerId);
        onDragStart?.();
      }

      e.preventDefault?.();

      const now = performance.now();
      const dt = now - lastT.current;
      if (dt > 0) {
        velocity.current = (e.clientX - lastX.current) / dt;
      }
      lastX.current = e.clientX;
      lastT.current = now;
      offsetRef.current = dx;

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(flushOffset);
      }
    },
    [onDragStart, flushOffset]
  );

  const endDrag = useCallback(
    (e) => {
      if (!armed.current && !dragging.current) return;
      if (
        activePointer.current != null &&
        e?.pointerId != null &&
        e.pointerId !== activePointer.current
      ) {
        return;
      }

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
      }

      const dx = offsetRef.current;
      const vx = velocity.current;
      const didDrag = dragging.current;

      if (didDrag && targetRef.current?.hasPointerCapture?.(e.pointerId)) {
        targetRef.current.releasePointerCapture?.(e.pointerId);
      }

      armed.current = false;
      dragging.current = false;
      startX.current = null;
      startY.current = null;
      activePointer.current = null;
      targetRef.current = null;
      offsetRef.current = 0;
      velocity.current = 0;
      setIsDragging(false);
      setDragOffset(0);

      if (didDrag) {
        onDragEnd?.();
        suppressClick.current = true;
        setTimeout(() => {
          suppressClick.current = false;
        }, 220);

        const flicked = Math.abs(vx) > 0.45;
        if (Math.abs(dx) >= threshold || flicked) {
          const dir = flicked ? (vx < 0 ? 1 : -1) : dx < 0 ? 1 : -1;
          onSwipe?.(dir);
        }
      }
    },
    [onSwipe, onDragEnd, threshold]
  );

  const wasDragged = useCallback(() => suppressClick.current, []);

  return {
    dragOffset,
    isDragging,
    wasDragged,
    dragProps: {
      onPointerDown,
      onPointerMove,
      onPointerUp: endDrag,
      onPointerCancel: endDrag,
      style: { touchAction: 'pan-y' },
    },
  };
}
