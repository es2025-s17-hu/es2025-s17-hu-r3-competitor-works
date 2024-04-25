/**
 * Given an array of integers, return the sum of the two largest integers.
 * The function should return 0 if the array has fewer than two elements.
 * @param {number[]} numbers
 * @returns {number}
 */
function sumOfTwoLargestIntegers(numbers) {


    if(numbers.length < 2){
        return 0;
    }

    let max = numbers[0];
    let maxIndex = 0;

    for(let i=0;i<numbers.length;i++){
        if(numbers[i] > max){
            max = numbers[i];
            maxIndex = i;
        }
    }

    let newNumbers = [];
    for(let i = 0;i<numbers.length;i++){
        if(i !== maxIndex){
            newNumbers.push(numbers[i]);
        }
    }

    let maxTwo = newNumbers[0];

    for(let i=0;i<newNumbers.length;i++){
        if(newNumbers[i] > maxTwo){
            maxTwo = newNumbers[i];
        }
    }

    return max + maxTwo;

}