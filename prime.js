const primeFactors = (n) => {
  const primeNumber = new Set();

  while (n % 2 === 0) {
    primeNumber.add(2);
    n /= 2;
  }

  for (let divisor = 3; divisor * divisor <= n; divisor += 2) {
    while (n % divisor === 0) {
      primeNumber.add(divisor);
      n /= divisor;
    }
  }

  if (n > 2) {
    primeNumber.add(n);
  }

  return primeNumber;
};

const findConsecutive = (count) => {
  let consecutiveFound = 0;
  let number = 1;
  // let primeFactorsResult = [];

  while (true) {
    // const result = primeFactors(number);
    if (primeFactors(number).size === count) {
      consecutiveFound++;
      // primeFactorsResult.push(result);

      if (consecutiveFound === count) {
        return number - count + 1;
        // return primeFactorsResult.map((prime, i) => ({ number: number - count + 1 + i, prime: prime.join(' x ') }))
      }
    } else {
      consecutiveFound = 0;
      // primeFactorsResult = [];
    }
    number++;
  }
};

module.exports = { findConsecutive, primeFactors };
