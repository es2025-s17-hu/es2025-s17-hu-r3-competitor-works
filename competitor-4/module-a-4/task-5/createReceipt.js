/**
 * Creates a receipt for the given items.
 * @param {{ name: string; price: number }[]} items - The items to create a receipt for
 * @returns {string} The created receipt
 */
function createReceipt(items) {
	/* Your code here */
    let now = new Date();
    let year = now.getFullYear();
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let date = (now.getDate()).toString().padStart(2, '0');
    let hour = (now.getHours()).toString().padStart(2, '0');
    let minutes = (now.getMinutes()).toString().padStart(2, '0');
    let seconds = (now.getSeconds()).toString().padStart(2, '0');
    let output = `          DineEase Restaurant
          ${`${year}-${month}-${date} ${hour}:${minutes}:${seconds}`}         

Item                           Price  
--------------------------------------`;

    let formatPrice = (price) => {
        return price.toString().padStart(8, ' ');
    }

    let formatString = (name) => {
        return name.padEnd(30, ' ');
    }

    let total = 0;
    items.forEach(item => {
        output += `\n${formatString(item.name)}${formatPrice(item.price)}`;
        total += item.price;
    })

    output +=  `\n--------------------------------------`;
    output += `\n${formatString('Total')}${formatPrice(total)}`;
    output +=  `\n--------------------------------------`;

    output += `\n
      Thank you for your visit!`;
    return output;
}
