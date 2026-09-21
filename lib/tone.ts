import type { CSSProperties } from "react";
import type { ToneId } from "./content";

/**
 * Sets the `--tone` channel triplet on an element so descendants can use
 * `text-[rgb(var(--tone))]`, `bg-[rgb(var(--tone)/0.1)]` and friends.
 */
export const toneStyle = (tone: ToneId | "bone"): CSSProperties =>
  ({ "--tone": `var(--${tone})` }) as CSSProperties;
