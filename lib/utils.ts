import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getURL = () => {
  const url = process.env.VERCEL_URL;
  return url ? url : `http://localhost:${process.env.PORT || 3000}`;
};
