'use client';

/**
 * Horizontal sliding track — pairs with useDragSwipe for live drag + snap animation.
 * Track is viewport-sized; each .slide-item is 100% wide. translateX(-n * 100%) moves one slide.
 */
export default function SlideTrack({
  active,
  dragOffset = 0,
  isDragging = false,
  className = '',
  trackClassName = '',
  children,
  ...rest
}) {
  const style = {
    transform: `translate3d(calc(${-active * 100}% + ${dragOffset}px), 0, 0)`,
    transition: isDragging ? 'none' : 'transform var(--slide-duration) var(--slide-ease)',
  };

  return (
    <div className={`slide-viewport ${className}`.trim()} {...rest}>
      <div className={`slide-track ${trackClassName}`.trim()} style={style}>
        {children}
      </div>
    </div>
  );
}
