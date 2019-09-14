export const computePercentage = (part: number, total: number): number => {
  return total > 0 ? Number(((part / total) * 100).toFixed(1)) : 0;
};
