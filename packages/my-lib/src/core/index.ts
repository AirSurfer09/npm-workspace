// Core utilities
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

export const formatNumber = (num: number): string => {
  return num.toLocaleString();
};

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Core types
export interface BaseComponentProps {
  className?: string;
  id?: string;
}

export type Size = 'sm' | 'md' | 'lg';
export type Color = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'; 