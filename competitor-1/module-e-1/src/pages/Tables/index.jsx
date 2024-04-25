import { useEffect, useMemo, useState } from "react";
import { getOpenOrderByTable, getTables } from "../../api";
import { useNavigate } from "react-router-dom";

function TableBlock({ table, offset, hasOpenOrder, ...rest }) {
  return (
    <button
      style={{
        left: offset.x + table.x + "px",
        top: offset.y + table.y + "px",
        width: table.width + "px",
        height: table.height + "px",
      }}
      className={
        "rounded absolute " + (hasOpenOrder ? "bg-indigo-500" : "bg-indigo-700")
      }
      {...rest}
    >
      {table.name}
    </button>
  );
}

export default function Tables() {
  const [tables, setTables] = useState(null);
  const [orders, setOrders] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const tables = await getTables();
      setTables(tables);

      // there's an argument to be made here for using getOrders once
      // instead of getOpenOrderByTable for each table, however
      // in the long run, getOrders' response would get unusably large
      // and this would actually be more reliable.
      setOrders(
        await Promise.all(
          tables.map(async (table) => {
            try {
              return await getOpenOrderByTable(table.id);
            } catch (_) {
              return null;
            }
          })
        )
      );
    })();
  }, []);

  const offset = useMemo(() => {
    if (tables === null) {
      return { x: 0, y: 0 };
    }
    const leftmost = Math.min(...tables.map((x) => x.x));
    const highest = Math.min(...tables.map((x) => x.y));
    const rightmost = Math.max(...tables.map((x) => x.x + x.width));
    const lowest = Math.max(...tables.map((x) => x.y + x.height));

    const width = rightmost - leftmost;
    const height = lowest - highest;

    return {
      x: 1216 / 2 - width / 2,
      y: 707 / 2 - height / 2,
    };
  }, [tables]);

  if (tables === null || orders === null) {
    return <span>Loading...</span>;
  }

  return (
    <div className="p-8 flex min-h-screen">
      <main className="w-full flex flex-col bg-gray-700">
        <h1 className="pb-1 border-b w-full shrink-0 text-center font-bold">
          Select a Table
        </h1>
        <div className="w-full h-full relative">
          {tables.map((table, i) => (
            <TableBlock
              key={table.id}
              table={table}
              offset={offset}
              hasOpenOrder={orders[i] !== null}
              onClick={() => {
                navigate("/tables/" + table.id);
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
