// Core utility functions
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

export const formatNumber = (num: number): string => {
  return num.toLocaleString();
};

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}; 