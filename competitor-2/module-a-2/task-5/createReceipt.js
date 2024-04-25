/**
 * Creates a receipt for the given items.
 * @param {{ name: string; price: number }[]} items - The items to create a receipt for
 * @returns {string} The created receipt
 */
function createReceipt(items) {
  function pad(text, char) {
    const padding = 38 - text.length;
    return text
      .padStart(text.length + Math.floor(padding / 2), char)
      .padEnd(38, char);
  }

  let lines = [];
  lines.push(pad("DineEase Restaurant", " "));

  const date = new Date();

  lines.push(pad(date.toLocaleString(), "-"));

  lines.push("Item".padEnd + "Price");
  lines.push(pad("", "-"));
  for (const item of items) {
    lines.push(
      item.name.padEnd(38 - item.price.toString().length) + item.price
    );
  }
  lines.push(pad("", "-"));

  let total = 0;
  for (const item of items) {
    total += item.price;
  }

  lines.push("Total".padEnd(38 - total.toString().length) + total);
  lines.push(pad("", "-"));
  lines.push("");

  lines.push(pad("Thank you for your visit!", " "));

  return lines.join("\n");
}
