import React, { useEffect, useState } from "react";
import { useMenuItems } from "../../hooks/useMenuItems";
import { useMenuCategories } from "../../hooks/useMenuCategories";

// Define the background colors
const COLORS_MAP = {
  0: "#8c336d",
  1: "#444b8c",
  2: "#852647",
  3: "#6265d7",
  4: "#fd7da3",
  5: "#565969",
};

/**
 * Component for selecting a menu item
 */
const MenuItemSelect = ({ token, onSelect }) => {
  // Data from the API
  const { items, setItems } = useMenuItems(token);
  const { categories } = useMenuCategories(token);

  // Local storing
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedColor, setSelectedColor] = useState(COLORS_MAP[0]);

  // Get the items
  const selectedItems = items.filter(
    (x) => x.menuCategoryId === selectedCategory?.id
  );

  /**
   * Select the first category automatically
   */
  useEffect(() => {
    if (!selectedCategory) {
      if (categories.length > 0) {
        setSelectedCategory(categories[0]);
      }
    }
  }, [selectedCategory, categories]);

  return (
    <div className="p-2 flex flex-col w-3/4 overflow-hidden bg-[#2f2f2f] h-full max-h-screen overflow-y-auto h-screen">
      {/* Categories */}
      <div className="grid gap-2 grid-cols-4 p-2 border border-black">
        {categories.map((item, idx) => (
          <button
            key={item.id}
            className={`px-3 py-6 rounded-md text-white bg-black truncate ${
              selectedCategory?.id === item.id ? "border-2 border-white" : ""
            }`}
            onClick={() => {
              setSelectedCategory(item);
              setSelectedColor(COLORS_MAP[idx % 6]);
            }}
            style={{ backgroundColor: COLORS_MAP[idx % 6] }}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Items */}
      <div className="grid grid-cols-3 gap-3 mt-2 p-2">
        {selectedItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item)}
            className="rounded-md bg-[#4b4b4b] p-1 flex gap-2"
          >
            <div
              className="h-full w-[5px] rounded-md flex-shrink-0"
              style={{ backgroundColor: selectedColor }}
            />

            <div className="h-full flex-col flex justify-between text-white gap-3 p-1">
              <h6 className="text-white text-left">{item.name}</h6>
              <span className="text-sm text-base text-[#b5b5b5] text-left font-semibold">
                {item.price} Ft
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuItemSelect;
