/**
 * Get the statistics of the sales
 * @param {{ items: { name: string; price: number }[] }[]} sales - The sales data
 * @returns {{ numberOfSales: number; totalRevenue: number; averageRevenuePerSale: number; mostSoldItem: string }} - The statistics of the sales
 */
function getStatistics(sales) {
	let totalSales = 0;
	let totalRevenue = 0;
	let averageCount = 0;
	let mostSold = {
		name: '',
		price: 0
	};

	for(let i = 0; i < sales.length; i++) {
		totalSales++;

		for(let x = 0; x < sales[i].items.length; x++) {
			totalRevenue += sales[i].items[x].price;
			averageCount++;

			if(mostSold.price < sales[i].items[x].price) {
				mostSold.price = sales[i].items[x].price;
				mostSold.name = sales[i].items[x].name;
			}
		}
	}

	let average = totalRevenue / averageCount;

	return {
		numberOfSales: totalSales,
		totalRevenue: totalRevenue,
		averageRevenuePerSale: Math.round(average),
		mostSoldItem: mostSold.name
	}
}
