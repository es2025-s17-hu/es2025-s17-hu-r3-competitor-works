/**
 * Get the statistics of the sales
 * @param {{ items: { name: string; price: number }[] }[]} sales - The sales data
 * @returns {{ numberOfSales: number; totalRevenue: number; averageRevenuePerSale: number; mostSoldItem: string }} - The statistics of the sales
 */
function getStatistics(sales) {
  const totalRevenue = sales
    .flatMap((x) => x.items.map((x) => x.price))
    .reduce((acc, curr) => curr + acc, 0);

  const averageRevenuePerSale =
    sales
      .map((x) =>
        x.items.map((x) => x.price).reduce((acc, curr) => curr + acc, 0)
      )
      .reduce((acc, curr) => curr + acc, 0) / sales.length;

  const items = {};
  sales.forEach((sale) => {
    sale.items.forEach((item) => {
      if (item.name in items) {
        items[item.name]++;
      } else {
        items[item.name] = 1;
      }
    });
  });

  const mostSold = Object.entries(items).sort((a, z) => z[1] - a[1])[0];

  // DUNNO,maybe?
  // const numberOfSales = sales.flatMap((x) => x.items).length;

  return {
    numberOfSales: sales.length,
    totalRevenue,
    averageRevenuePerSale,
    mostSoldItem: mostSold[0],
  };
}
