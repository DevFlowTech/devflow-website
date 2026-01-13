import { clsx, type ClassValue } from "clsx";

// Simple class name merger utility
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Stagger delay calculator for animations
export function staggerDelay(index: number, baseDelay: number = 0.1): number {
  return index * baseDelay;
}

// Format number with separator
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}
