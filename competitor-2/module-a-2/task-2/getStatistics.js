/**
 * Get the statistics of the sales
 * @param {{ items: { name: string; price: number }[] }[]} sales - The sales data
 * @returns {{ numberOfSales: number; totalRevenue: number; averageRevenuePerSale: number; mostSoldItem: string }} - The statistics of the sales
 */
function getStatistics(sales) {
  let totalRevenue = 0;
  let itemSales = {};

  for (const sale of sales) {
    for (const item of sale.items) {
      totalRevenue += item.price;

      if (!(item.name in itemSales)) {
        itemSales[item.name] = 0;
      }

      itemSales[item.name]++;
    }
  }

  let mostSold = null;
  for (const item of Object.entries(itemSales)) {
    if (mostSold == null || item[1] > itemSales[mostSold]) {
      mostSold = item[0];
    }
  }

  const statistics = {
    numberOfSales: sales.length,
    totalRevenue: totalRevenue,
    averageRevenuePerSale: totalRevenue / sales.length,
    mostSoldItem: mostSold,
  };

  return statistics;
}
