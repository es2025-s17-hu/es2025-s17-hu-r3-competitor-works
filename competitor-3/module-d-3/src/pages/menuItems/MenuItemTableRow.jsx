import React, { useState } from "react";
import EditMenuItemModal from "./EditMenuItemModal";

/**
 * Component that displays one menu item in the table
 */
const MenuItemTableRow = ({ item, setItems, categories }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <EditMenuItemModal
        setItems={setItems}
        item={item}
        onClose={() => setOpen(false)}
        open={open}
        categories={categories}
      />
      <tr
        className="border-b w-full hover:bg-neutral-100 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <td className="p-3">{item.name}</td>
        <td className="p-3">{item.type}</td>
        <td className="p-3">{item.price} Ft</td>
      </tr>
    </>
  );
};

export default MenuItemTableRow;
