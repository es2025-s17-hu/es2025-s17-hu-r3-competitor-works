/**
 * Creates a receipt for the given items.
 * @param {{ name: string; price: number }[]} items - The items to create a receipt for
 * @returns {string} The created receipt
 */
function createReceipt(items) {

    let itemsPrint = ''
    let totalPrice = 0

    items.forEach(item=>{
        let spaceBefore = ''
        let spaceAfter = ''
        if (item.name.length < 15){
            for (let i = 0; i < 15-item.name.length; i++) {
                spaceBefore += ' '
            }
        }
        if (item.price.toString().length < 4){
            console.log(item.price)
            for (let i = 0; i < 4-item.price.toString().length; i++) {
                spaceAfter += ' '
            }
        }
        
        itemsPrint += `${item.name}${spaceBefore}                  ${spaceAfter}${item.price}\n`
        totalPrice += item.price
    })

    let data = '\n' +
        '          DineEase Restaurant\n' +
        '           2024-04-24 09:00\n' +
        '\n' +
        'Item                           Price\n' +
        '--------------------------------------\n' +
        itemsPrint +
        '--------------------------------------\n' +
        'Total                            '+totalPrice+'\n' +
        '--------------------------------------\n' +
        '\n' +
        '      Thank you for your visit!\n'

    return data
}
