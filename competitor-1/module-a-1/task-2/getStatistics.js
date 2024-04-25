/**
 * Get the statistics of the sales
 * @param {{ items: { name: string; price: number }[] }[]} sales - The sales data
 * @returns {{ numberOfSales: number; totalRevenue: number; averageRevenuePerSale: number; mostSoldItem: string }} - The statistics of the sales
 */
function getStatistics(sales) {
  const revenues = sales.map((x) => x.items.reduce((a, x) => x.price + a, 0));
  const totalRevenue = revenues.reduce((a, x) => x + a, 0);

  const itemsBySale = Object.entries(
    sales
      .flatMap((x) => x.items.map((x) => x.name))
      .reduce((a, x) => {
        if (a[x] === undefined) a[x] = 0;
        a[x]++;
        return a;
      }, {})
  );
  const mostSoldItemCount = Math.max(...itemsBySale.map((x) => x[1]));

  return {
    numberOfSales: sales.length,
    totalRevenue,
    averageRevenuePerSale: totalRevenue / revenues.length,
    mostSoldItem: itemsBySale.find((x) => x[1] === mostSoldItemCount)[0],
  };
}
