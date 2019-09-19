export const computeAgeRange = (
  age: number,
  minAge: number,
  maxAge: number
) => {
  if (age > maxAge) {
    maxAge = age;
  }
  if (age < minAge) {
    minAge = age;
  }

  return [minAge, maxAge];
};
