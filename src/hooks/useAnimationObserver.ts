import { useEffect, useRef } from 'react';

const getObserverHandler =
  (animationClass: string) =>
    (entries: IntersectionObserverEntry[]) => {
      {
        const [entry] = entries;

        if (entry.isIntersecting)
          entry.target.classList.add(animationClass);

        if (!entry.isIntersecting && entry.target.classList.contains(animationClass))
          entry.target.classList.remove(animationClass);
      }
    };

export const useAnimationObserver = (animationClass: string, options?: IntersectionObserver) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animationObserver = new IntersectionObserver(getObserverHandler(animationClass), options);

    if (containerRef.current) animationObserver.observe(containerRef.current);

    return () => {
      if (containerRef.current) animationObserver.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef];
};