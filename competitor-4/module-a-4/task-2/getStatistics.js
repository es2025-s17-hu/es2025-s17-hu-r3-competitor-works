/**
 * Get the statistics of the sales
 * @param {{ items: { name: string; price: number }[] }[]} sales - The sales data
 * @returns {{ numberOfSales: number; totalRevenue: number; averageRevenuePerSale: number; mostSoldItem: string }} - The statistics of the sales
 */
function getStatistics(sales) {
	/* Your code here */
    let total = sales.reduce((sum, currentValue) => {
        return sum + currentValue.items.map(item => item.price).reduce((sum2, currentValue2) => sum2 + currentValue2, 0);
    }, 0);

    let map = {};
    sales.forEach(sale => {
        sale.items.forEach(item => {
            if (map[item.name]) {
                map[item.name] += 1;
            } else {
                map[item.name] = 1;
            }
        });
    });
    let totally = [];
    for(let key in map) {
        totally.push({
            name: key,
            count: map[key],
        })
    }

    totally.sort((a, b) => b.count - a.count);

    return {
        numberOfSales: sales.length,
        totalRevenue: total,
        averageRevenuePerSale: total / sales.length,
        mostSoldItem: totally[0].name,
    }
}
