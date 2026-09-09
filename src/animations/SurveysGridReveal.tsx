"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseSurveysGridRevealParams {
  resetKey: string;
  itemsCount: number;
  isRtl: boolean;
}

export default function useSurveysGridReveal({
  resetKey,
  itemsCount,
  isRtl,
}: UseSurveysGridRevealParams) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animatedCountRef = useRef(0);
  const resetKeyRef = useRef("");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const previousResetKey = resetKeyRef.current;
    const previousAnimatedCount = animatedCountRef.current;

    const isFreshList = resetKey !== resetKeyRef.current;
    resetKeyRef.current = resetKey;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(container.children);

      if (cards.length === 0) {
        animatedCountRef.current = 0;
        return;
      }

      if (prefersReducedMotion) {
        gsap.set(cards, { opacity: 1, x: 0 });
        animatedCountRef.current = cards.length;
        return;
      }

      const startIndex = isFreshList ? 0 : Math.min(animatedCountRef.current, cards.length);
      const newCards = cards.slice(startIndex);

      if (isFreshList) {
        gsap.set(cards, { opacity: 0, x: isRtl ? -40 : 40 });
      } else if (newCards.length > 0) {
        gsap.set(newCards, { opacity: 0, x: isRtl ? -40 : 40 });
      }

      if (newCards.length > 0) {
        const columns = getComputedStyle(container).gridTemplateColumns.split(" ").length || 1;
        const rows: HTMLElement[][] = [];
        for (let i = 0; i < newCards.length; i += columns) {
          rows.push(newCards.slice(i, i + columns));
        }

        rows.forEach(rowCards => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: rowCards[0],
                start: "top 90%",
                toggleActions: "play none none none",
              },
            })
            .to(rowCards, {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
              stagger: 0.08,
            });
        });
      }

      animatedCountRef.current = cards.length;
      ScrollTrigger.refresh();
    }, container);

    return () => {
      ctx.revert();
      resetKeyRef.current = previousResetKey;
      animatedCountRef.current = previousAnimatedCount;
    };
  }, [resetKey, itemsCount, isRtl]);

  return containerRef;
}
