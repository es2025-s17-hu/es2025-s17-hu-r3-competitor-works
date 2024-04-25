const exampleData1 = [1, 2, 3, 4, 5]
const exampleData2 = [5, 5, 5, 5, 5]
const exampleData3 = [1]
const exampleData4 = []

document.getElementById("example1").innerHTML += sumOfTwoLargestIntegers(exampleData1);
document.getElementById("example2").innerHTML += sumOfTwoLargestIntegers(exampleData2);
document.getElementById("example3").innerHTML += sumOfTwoLargestIntegers(exampleData3);
document.getElementById("example4").innerHTML += sumOfTwoLargestIntegers(exampleData4);

function calculateUserInput() {
	const userInput = document.getElementById("userData").value;
	const userArray = userInput.split(',').map(function(item) {
		return parseInt(item, 10);
	});
	const result = sumOfTwoLargestIntegers(userArray);
	document.getElementById("userResult").innerHTML = "Sum: " + result;
}

document.addEventListener('DOMContentLoaded', (event) => {
    fetch('sumOfTwoLargestIntegers.js')
        .then(response => response.text())
        .then(text => {
            document.getElementById('sourceCode').textContent = text;
        })
        .catch(err => console.error('Failed to load source code:', err));
});