import { useMemo } from "react";
import table from "../../assets/table-logo.png";

/**
 * Sidebar that does the main functionality :D
 */
const Sidebar = ({ selectedTable, openOrder, onExit, onClose }) => {
  const items = useMemo(() => {
    const items = {};
    const seen = [];

    const toDisplay = [...openOrder.OrderItems].sort(
      (a, z) =>
        new Date(z.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
    for (const i of toDisplay) {
      if (seen.includes(i.MenuItem.id)) {
        items[i.MenuItem.id].quantity++;
      } else {
        items[i.MenuItem.id] = { ...i };
        seen.push(i.MenuItem.id);
      }
    }

    return items;
  }, [openOrder]);

  // Calculate the sum
  const sum = openOrder.OrderItems.map(
    (x) => x.quantity * x.MenuItem.price
  ).reduce((acc, curr) => curr + acc, 0);

  return (
    <div className="w-1/4 flex flex-col gap-2 h-screen p-2 bg-[#212121]">
      <h3 className="text-xl font-semibold text-white px-2 py-2 bg-[#2a2a2a] flex items-center gap-4 border-b border-[#6e6e6e]">
        <img src={table} alt="Table or Chair Icon" className="w-[32px]" />
        {selectedTable.name}
      </h3>

      {/* Items */}
      <div className="flex flex-col max-h-full overflow-y-auto pr-4">
        {Object.values(items)
          .sort(
            (a, z) =>
              new Date(z.updatedAt).getTime() - new Date(a.updatedAt).getTime()
          )
          .map((item) => (
            <div
              key={item.id}
              className="bg-[#181818] border-b border-[#676767] p-2 flex items-center gap-4"
            >
              <div className="rounded-full px-4 py-1.5 text-white font-semibold bg-[#676767] text-sm flex-shrink-0 whitespace-nowrap">
                x {item.quantity}
              </div>
              <span className="text-white">{item.MenuItem.name}</span>
            </div>
          ))}
      </div>

      {/* Sum and CTAs */}
      <div className="items-center flex justify-between mt-auto border-b border-[#6a6a6a] pb-3">
        <span className="text-2xl text-white font-semibold">Sum:</span>
        <span className="text-2xl text-white font-semibold">
          {new Intl.NumberFormat("hu-HU").format(sum)} Ft
        </span>
      </div>

      {/* CTA */}
      <div className="flex items-center justify-between gap-2 mt-2">
        <button
          onClick={onExit}
          className="w-1/2 px-4 py-3 rounded-md font-semibold flex items-center justify-center text-white bg-[#8c336d]"
        >
          Exit
        </button>
        <button
          onClick={onClose}
          className="w-1/2 px-4 py-3 rounded-md font-semibold flex items-center justify-center text-white bg-[#fe767d]"
        >
          Close Order
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
