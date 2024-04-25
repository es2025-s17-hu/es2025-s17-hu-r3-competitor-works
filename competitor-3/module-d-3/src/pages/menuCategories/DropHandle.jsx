import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

/**
 * Sapce that sits between the rows to drop and handles its functionality
 * @returns
 */
const DropHandle = ({ nextPosition, setCategories }) => {
  const { token } = useAuth();
  const [draggedOver, setDraggedOver] = useState(false);

  return (
    <div
      className={`w-full h-[20px] ${draggedOver ? "bg-neutral-200" : ""}`}
      onDragOver={(e) => {
        e.preventDefault();
        setDraggedOver(true);
      }}
      onDragLeave={() => setDraggedOver(false)}
      onDrop={(e) => {
        setDraggedOver(false);
        const item = JSON.parse(e.dataTransfer.getData("text/plain"));
        setCategories((prev) =>
          prev
            .map((x) =>
              x.id === item.id ? { ...item, priority: nextPosition } : x
            )
            .sort((a, z) => a.priority - z.priority)
        );
        axios.put(
          `/menuCategories/${item.id}`,
          { priority: nextPosition },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }}
    />
  );
};

export default DropHandle;
