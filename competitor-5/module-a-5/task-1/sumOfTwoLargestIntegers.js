/**
 * Given an array of integers, return the sum of the two largest integers.
 * The function should return 0 if the array has fewer than two elements.
 * @param {number[]} numbers
 * @returns {number}
 */
function sumOfTwoLargestIntegers(numbers) {
	let _x = 0;
	let sum = 0;
	let largest = [0, 0];

	if (numbers.length < 2) {
		return 0;
	}

	numbers.sort((a, b) => a - b);

	sum = numbers[numbers.length - 1] + numbers[numbers.length - 2];

	return sum;
}