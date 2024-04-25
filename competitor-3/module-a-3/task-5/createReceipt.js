/**
 * Creates a receipt for the given items.
 * @param {{ name: string; price: number }[]} items - The items to create a receipt for
 * @returns {string} The created receipt
 */
function createReceipt(items) {
  const date = new Date()
    .toLocaleString("hu-HU")
    .substring(0, 19)
    .replace(/\.\ /g, "-");

  const formatted =
    date.substring(0, 10) + " " + date.substring(11, date.length);

  let res = `
        DineEase Restaurant         
${formatted.padStart(
  formatted.length + Math.ceil(formatted.length / 2) + 1,
  " "
)}
Item                             Price
--------------------------------------\n`;

  const total = items.map((x) => x.price).reduce((acc, res) => res + acc, 0);

  for (const i of items) {
    res += `${i.name.padEnd(10 - i.price.toString().length, " ")} ${i.price
      .toString()
      .padStart(37 - i.name.length, " ")}\n`;
  }

  res += "--------------------------------------\n";
  res += `${"Total".padEnd(10 - total.toString().length, " ")} ${total
    .toString()
    .padStart(36 - "Total".length, " ")}\n`;
  res += "\n       Thank you for your visit!      \n";

  return res;
}
