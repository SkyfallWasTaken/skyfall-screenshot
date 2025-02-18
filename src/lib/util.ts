import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const wallpaperCount = 6;

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Generates a random number between 0 (inclusive) and n (exclusive)
 * @param n The upper bound (exclusive)
 * @returns A random number between 0 and n
 */
export function random(n: number): number {
	return Math.floor(Math.random() * n);
}
