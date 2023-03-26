export function generateRandomPrice() {
  const min = 100;
  const max = 10000;
  const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNum * 10;
}
