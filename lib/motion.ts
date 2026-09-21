"use client";

import { useEffect, useState } from "react";

// Ease-out with a long tail: things settle rather than stop.
export const EASE = [0.22, 1, 0.36, 1] as const;

// The single orchestrated entrance sequence (seconds from load), owned by Hero:
// role label, headline resolves, subhead, then the comparison table prints
// row by row. Nothing else on the page animates on entrance.
export const SEQUENCE = {
  eyebrow: 0.1,
  headline: 0.35,
  headlineStagger: 0.08,
  sub: 1.3,
  tableStart: 1.5,
  tableStagger: 0.2,
} as const;

export type MotionMode = "pending" | "full" | "reduced";

/**
 * Reads prefers-reduced-motion after mount.
 *
 * Framer's own useReducedMotion can return a different value on the first
 * client render than the server rendered, which risks a hydration mismatch
 * that leaves hidden initial styles stuck in the DOM. Starting at "pending"
 * keeps server and client identical; consumers hold their hidden state until
 * the real preference is known, then either animate or snap straight to the end.
 */
export function useMotionMode(): MotionMode {
  const [mode, setMode] = useState<MotionMode>("pending");

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMode(query.matches ? "reduced" : "full");
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return mode;
}
