import { useContext, useEffect, useMemo, useState } from "react";
import tableIcon from "../../../assets/table-logo.png";
import { useNavigate, useParams } from "react-router-dom";
import { closeOrder, getOpenOrderByTable, getTables } from "../../../api";
import { PrintBillModalContext } from "../components/PrintBillModal";

function OrderItem({ item }) {
  return (
    <li
      className={
        "flex gap-4 items-center overflow-scroll-y py-2 border-b border-gray-500 last:pb-0 last:border-b-0 first:pt-0"
      }
    >
      <span className="px-2 py-1 rounded-full bg-gray-500">
        x {item.quantity}
      </span>
      <span className="font-medium">{item.MenuItem.name}</span>
    </li>
  );
}

export default function OrderListing({ updatedAt, order }) {
  const [table, setTable] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const modal = useContext(PrintBillModalContext);

  useEffect(() => {
    (async () => {
      const table = (await getTables()).find((x) => x.id == params.id);
      setTable(table);
    })();
  }, [params.id, updatedAt]);

  const items = useMemo(() => {
    if (order === null || order === undefined) return [];

    let items = [];

    order.OrderItems.forEach((item) => {
      let otherItem = items.find((x) => x.menuItemId === item.menuItemId);

      if (otherItem) {
        otherItem.createdAt = Math.max(
          otherItem.createdAt,
          new Date(item.createdAt).valueOf(),
          new Date(item.updatedAt).valueOf()
        );
        otherItem.quantity += item.quantity;
      } else {
        items.push({
          ...item,
          createdAt: Math.max(
            new Date(item.createdAt).valueOf(),
            new Date(item.updatedAt).valueOf()
          ),
        });
      }
    });

    return items.sort((a, b) => b.createdAt - a.createdAt);
  }, [order]);

  const sum = useMemo(() => {
    return items.reduce(
      (a, x) => parseFloat(x.MenuItem.price) * x.quantity + a,
      0
    );
  }, [items]);

  if (table === null || order === undefined) {
    return <span>Loading...</span>;
  }

  return (
    <div className="p-2 flex flex-col gap-2 h-screen">
      <div className="flex gap-2 text-xl items-center pb-1 border-b shrink-0">
        <img src={tableIcon} className="w-8" />
        <p>{table.name}</p>
      </div>
      <ul className="h-full overflow-y-scroll shrink-1">
        {items.map((item, i) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </ul>
      <div className="flex justify-between shrink-0 pb-1 border-b border-gray-500 text-2xl font-medium">
        <span>Sum:</span>
        <span>{sum} Ft</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button
          className="rounded bg-indigo-700 py-4"
          onClick={() => navigate("/tables")}
        >
          Exit
        </button>
        {order === null ? (
          <div className="w-full h-full flex flex-col items-center justify-center text-center">
            <span>Order closed.</span>
            <span>Add item to open...</span>
          </div>
        ) : (
          <button
            className="rounded bg-red-500 py-4"
            onClick={async () => {
              await closeOrder(table.id);
              modal.open();
            }}
          >
            Close Order
          </button>
        )}
      </div>
    </div>
  );
}
