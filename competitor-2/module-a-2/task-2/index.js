const exampleData1 = [
  {
    items: [
      { name: "Grilled chicken", price: 1200 },
      { name: "French fries", price: 600 },
      { name: "Coca-Cola", price: 400 },
    ],
  },
  {
    items: [
      { name: "Grilled chicken", price: 1200 },
      { name: "Coca-Cola", price: 400 },
    ],
  },
  {
    items: [
      { name: "French fries", price: 600 },
      { name: "Coca-Cola", price: 400 },
    ],
  },
];

document.getElementById("example1").innerHTML += JSON.stringify(
  getStatistics(exampleData1),
  null,
  2
);

document.addEventListener("DOMContentLoaded", (event) => {
  fetch("getStatistics.js")
    .then((response) => response.text())
    .then((text) => {
      document.getElementById("sourceCode").textContent = text;
    })
    .catch((err) => console.error("Failed to load source code:", err));
});
