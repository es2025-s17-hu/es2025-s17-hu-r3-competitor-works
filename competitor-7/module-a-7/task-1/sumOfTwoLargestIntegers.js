/**
 * Given an array of integers, return the sum of the two largest integers.
 * The function should return 0 if the array has fewer than two elements.
 * @param {number[]} numbers
 * @returns {number}
 */
function sumOfTwoLargestIntegers(numbers) {
	numbers.sort((a,b)=>b-a)
    if (numbers[0] && numbers[1]){
        return numbers[0] + numbers[1]
    }
    else{
        return 0
    }
}