export default function getPrimes(max) {
  let primes = [];
  if (max !== undefined && max !== 0) {
    for (let i = 0; i < max; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
  }
  return primes;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  } else {
    let q = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= q; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}