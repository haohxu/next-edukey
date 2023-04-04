import React, { useLayoutEffect } from "react";

export default function useInfiniteScroll(
  {
    trackElement, // Element placed at bottom of scroll container
    containerElement, // Scroll container, window used if not provided
    multiplier = 1, // Adjustment for padding, margins, etc.
  }: { trackElement: string; containerElement: string; multiplier: number },
  callback: any
) {
  useLayoutEffect(() => {
    // Element whose position we want to track
    const ele = document.querySelector(trackElement);

    // If not containerElement provided, we use window
    let container: any = window;
    if (containerElement) {
      container = document.querySelector(containerElement);
    }

    // Get window innerHeight or height of container (if provided)
    let h: any;
    if (containerElement) {
      h = container.getBoundingClientRect().height;
    } else {
      h = container.innerHeight;
    }

    const handleScroll = () => {
      const elePos = ele?.getBoundingClientRect().y;
      if (elePos !== undefined)
        if (elePos * multiplier <= h) {
          if (typeof callback === "function") callback();
        }
    };

    // Set a passive scroll listener on our container
    container.addEventListener("scroll", handleScroll, { passive: true });

    // handle cleanup by removing scroll listener
    return () =>
      container.removeEventListener("scroll", handleScroll, { passive: true });
  });
}
