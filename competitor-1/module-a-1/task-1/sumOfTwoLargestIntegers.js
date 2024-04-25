/**
 * Given an array of integers, return the sum of the two largest integers.
 * The function should return 0 if the array has fewer than two elements.
 * @param {number[]} numbers
 * @returns {number}
 */
function sumOfTwoLargestIntegers(numbers) {
  if (numbers.length < 2) return 0;

  let largest = Math.max(...numbers);
  numbers.splice(numbers.indexOf(largest), 1);
  let secondLargest = Math.max(...numbers);

  return largest + secondLargest;
}
