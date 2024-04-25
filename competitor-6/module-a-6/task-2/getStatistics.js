/**
 * Get the statistics of the sales
 * @param {{ items: { name: string; price: number }[] }[]} sales - The sales data
 * @returns {{ numberOfSales: number; totalRevenue: number; averageRevenuePerSale: number; mostSoldItem: string }} - The statistics of the sales
 */
function getStatistics(sales) {
    let numberOfSales = sales.length;

    let totalRevenue = 0;
    let itemCounter = {
        "cola": 0,
        "fries": 0,
        "chicken": 0
    }

    let most = "Grilled chicken";
    for (let sale of sales) {
        for (let item of sale.items) {
            totalRevenue += item.price;
            if(item.name === "Grilled chicken"){
                itemCounter.chicken++;
                most = "Grilled chicken";
            }else if(item.name === "French fries"){
                itemCounter.fries++;
                most = "French fries";
            }else if(item.name === "Coca-Cola"){
                itemCounter.cola++;
                most = "Coca-Cola";
            }
        }
    }


    let averageRevenuePerSale = totalRevenue / numberOfSales;

    return{
        numberOfSales: numberOfSales,
        totalRevenue: totalRevenue,
        averageRevenuePerSale: averageRevenuePerSale,
        mostSoldItem: most
    }

}
