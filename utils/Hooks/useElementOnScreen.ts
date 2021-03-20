import { useEffect, useRef, useState } from "react";

export const useElementOnScreen = () => {
  const options = {
    root: null,
    rootMargin: "0px",
  };
  const ref = useRef(null);
  const [isPartiallyVisible, setIsPartiallyVisible] = useState(false);
  const [isFullyVisible, setIsFullyVisible] = useState(false);

  const partialCb = (entries: any) => {
    const [entry] = entries;
    setIsPartiallyVisible(entry.isIntersecting);
  };
  const FullCb = (entries: any) => {
    const [entry] = entries;
    setIsFullyVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observePartial = new IntersectionObserver(partialCb, {
      ...options,
      threshold: 0.0,
    });
    const observeFull = new IntersectionObserver(FullCb, {
      ...options,
      threshold: 1.0,
    });
    if (ref.current) {
      observePartial.observe(ref.current);
      observeFull.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observePartial.unobserve(ref.current);
        observeFull.unobserve(ref.current);
      }
    };
  }, [ref, options]);
  return [ref, isPartiallyVisible, isFullyVisible] as const;
};
