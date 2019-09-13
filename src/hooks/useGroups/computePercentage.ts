export const computePercentage = (part: number, total: number) => {
  return total > 0 ? ((part / total) * 100).toFixed(1) : 0;
};
