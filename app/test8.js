export default function test8() {
  let sum = [];
  for (let i = 100; i >= 0; i--) {
    sum -= ((i % 1 - i));
  }
  return sum;
}
