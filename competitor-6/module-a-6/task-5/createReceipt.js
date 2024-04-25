/**
 * Creates a receipt for the given items.
 * @param {{ name: string; price: number }[]} items - The items to create a receipt for
 * @returns {string} The created receipt
 */
function createReceipt(items) {

    let date = new Date();

    let total = 0;
    for(let item of items){
        total+= item.price;
    }

    let receipt = `
                DineEase Restaurant
                ${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}
    --------------------------------------
    Item                             Price
    ${items[0].name}                ${items[0].price}   
    ${items[1].name}                    ${items[1].price}  
    ${items[2].name}                        ${items[2].price}
    --------------------------------------
    Total                            ${total}
    --------------------------------------
            Thank you for your visit   
    `;


    return receipt;
}
