const sumAll = function sumAll(min, max) {
  // 1. Validate inputs: must be numbers, positive, and integers
  if (typeof min !== 'number' || typeof max !== 'number') return 'ERROR';
  if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
  if (min < 0 || max < 0) return 'ERROR';

  // 2. Rearrange if the first number is larger than the second
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  // 3. Loop through the range and accumulate the sum
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

// Do not edit below this line
module.exports = sumAll;
