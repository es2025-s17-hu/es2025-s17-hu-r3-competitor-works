import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import {
  createOrder,
  createOrderItem,
  getCategories,
  getItems,
  getOpenOrderByTable,
} from "../../api";
import PrintBillModal from "./components/PrintBillModal";
import OrderListing from "./sections/OrderListing";
import MenuPicker from "./sections/MenuPicker";

// Derive a unique color for each category using SHA-256
async function categoryToColorHex(category) {
  const a = [
    ...new Uint8Array(
      await window.crypto.subtle.digest(
        "SHA-256",
        new Uint8Array([...category.name].map((x) => x.charCodeAt(0)))
      )
    ),
  ];
  return (
    "#" +
    a
      .slice(0, 3)
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
  );
}

export default function Table() {
  const [updatedAt, setUpdatedAt] = useState(Date.now());

  const params = useParams();
  const [order, setOrder] = useState(undefined);

  const tableId = useMemo(() => parseInt(params.id, 10), [params.id]);

  useEffect(() => {
    (async () => {
      let order;

      try {
        order = await getOpenOrderByTable(tableId);
      } catch (e) {
        order = await createOrder(tableId);
        order.OrderItems = [];
      }

      setOrder(order);
    })();
  }, [tableId, updatedAt]);

  if (order === undefined) {
    return <span>Loading...</span>;
  }

  return (
    <PrintBillModal>
      <main className="grid grid-cols-4 w-full h-screen">
        <OrderListing updatedAt={updatedAt} order={order} />
        <MenuPicker
          onOrder={async (item) => {
            await createOrderItem({
              orderId: order.id,
              menuItemId: item.id,
              quantity: 1,
            });
            setUpdatedAt(Date.now());
          }}
        />
      </main>
    </PrintBillModal>
  );
}
