const exampleData1 = [
  { name: "Grilled chicken", price: 1200 },
  { name: "French fries", price: 600 },
  { name: "Coca-Cola", price: 400 },
];

console.log(createReceipt(exampleData1));


document.addEventListener('DOMContentLoaded', (event) => {
    fetch('createReceipt.js')
        .then(response => response.text())
        .then(text => {
            document.getElementById('sourceCode').textContent = text;
        })
        .catch(err => console.error('Failed to load source code:', err));
});