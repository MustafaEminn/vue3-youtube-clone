export function generateNumber(min: number = 1, max: number = 10): number {
  return Math.floor(Math.random() * max) + min;
}
