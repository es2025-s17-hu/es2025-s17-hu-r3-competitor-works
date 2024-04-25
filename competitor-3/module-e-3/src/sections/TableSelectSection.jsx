import React from "react";
import { useTables } from "../hooks/useTables";
import axios from "axios";

/**
 * Component that displays a table selection section
 * @returns
 */
const TableSelectSection = ({ token, setSelectedTable }) => {
  const { tables } = useTables(token);

  /**
   * Open an order on table select
   */
  async function handleTableClick(table) {
    if (!table.hasOpenOrder) {
      await axios.post(
        "/orders",
        { tableId: table.id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    }
    setSelectedTable(table);
  }

  // Calculate so the tables are always in the center
  const maxWidth = tables.sort((a, z) => z.x - a.x)?.[0];
  const minWidth = tables.sort((a, z) => a.x - z.x)?.[0];
  const right = maxWidth?.x + maxWidth?.width;
  const left = minWidth?.x;
  const leftMargin = ((window?.innerWidth || 1280) - right - left) / 2;

  return (
    <div className="w-screen h-screen flex flex-col gap-16 bg-[#4b4b4b]">
      {/* Title */}
      <h1 className="font-semibold border-b border-white text-white text-2xl text-center p-3 w-[calc(100%-1rem)] mx-auto">
        Select a Table
      </h1>

      {/* Tables */}
      <div className="gap-2 relative" style={{ marginLeft: `${leftMargin}px` }}>
        {tables.map((table) => (
          <button
            key={table.id}
            onClick={() => handleTableClick(table)}
            className={`p-2 flex items-center justify-center rounded-md font-semibold text-white absolute ${
              table.hasOpenOrder ? "bg-[#fe767d]" : "bg-[#8b336d]"
            }`}
            style={{
              left: `${table.x}px`,
              top: `${table.y}px`,
              width: `${table.width}px`,
              height: `${table.height}px`,
            }}
          >
            {table.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TableSelectSection;
