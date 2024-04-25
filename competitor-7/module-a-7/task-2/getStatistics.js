/**
 * Get the statistics of the sales
 * @param {{ items: { name: string; price: number }[] }[]} sales - The sales data
 * @returns {{ numberOfSales: number; totalRevenue: number; averageRevenuePerSale: number; mostSoldItem: string }} - The statistics of the sales
 */
function getStatistics(sales) {
    let totalRevenue = 0
    let GrilledCounter = 0
    let friesCounter = 0
    let colaCounter = 0
    let mustProduct= 'Grilled chicken'


    sales.forEach(order=>{
        order.items.forEach(item=>{
            totalRevenue += item.price
            item.name === 'Grilled chicken' ? GrilledCounter++ :null
            item.name === 'French fries' ? friesCounter++ :null
            item.name === 'Coca-Cola' ? colaCounter++ :null
        })
    })

    GrilledCounter < friesCounter ? mustProduct =  'French fries' : null
    GrilledCounter < colaCounter ? mustProduct =  'Cola-Cola' : null
    friesCounter > colaCounter ? mustProduct =  'French fries' : null
    GrilledCounter > colaCounter ? mustProduct =  'Grilled chicken' : null




	let data = {
        numberOfSales : sales.length,
        totalRevenue : totalRevenue,
        averageRevenuePerSale : totalRevenue / sales.length,
        mostSoldItem : mustProduct
    }

    let currentProduct = ''


    return data
}


