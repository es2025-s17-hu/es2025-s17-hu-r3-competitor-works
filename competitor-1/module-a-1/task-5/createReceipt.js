/**
 * Creates a receipt for the given items.
 * @param {{ name: string; price: number }[]} items - The items to create a receipt for
 * @returns {string} The created receipt
 */
function createReceipt(items) {
  const width = 38;
  const now = new Date();

  function centerText(text) {
    const centering = (width - text.length) / 2;
    return (
      " ".repeat(Math.floor(centering)) +
      text +
      " ".repeat(Math.ceil(centering))
    );
  }

  function fullWidth(char) {
    return char.repeat(width);
  }

  function spaceBetween(left, right) {
    const spaceNeeded = width - left.length - right.length;
    return left + " ".repeat(spaceNeeded) + right;
  }

  return [
    centerText("DineEase Restaurant"),
    centerText(
      `${now.getFullYear()}-${now.getMonth().toString().padStart(2, "0")}-${now
        .getDate()
        .toString()
        .padStart(2, "0")} ${now.getHours().toString().padStart(2, "0")}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`
    ),
    fullWidth(" "),
    spaceBetween("Item", "Price"),
    fullWidth("-"),
    ...items.map((x) => spaceBetween(x.name, x.price.toString())),
    fullWidth("-"),
    spaceBetween("Total", items.reduce((a, x) => x.price + a, 0).toString()),
    fullWidth("-"),
    fullWidth(" "),
    centerText("Thank you for your visit!"),
    fullWidth(" "),
  ].join("\n");
}
