import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategories, getItems } from "../../../api";

// Derive a unique color for each category using SHA-256
async function categoryToColorHex(category) {
  const a = [
    ...new Uint8Array(
      await window.crypto.subtle.digest(
        "SHA-256",
        new Uint8Array(
          [...(category.name + ":" + category.id)].map((x) => x.charCodeAt(0))
        )
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

export default function MenuPicker({ onOrder }) {
  const [categories, setCategories] = useState(null);
  const [selectedCategory, selectCategory] = useState(null);
  const [menuItems, setMenuItems] = useState(null);
  const params = useParams();

  useEffect(() => {
    (async () => {
      const categories = await getCategories();
      const coloredCategories = await Promise.all(
        categories.map(async (x) => ({
          ...x,
          color: await categoryToColorHex(x),
        }))
      );
      setCategories(coloredCategories);
      selectCategory(categories[0].id);

      setMenuItems(await getItems());
    })();
  }, [params.id]);

  const currentMenuItems = useMemo(() => {
    if (categories === null || selectedCategory === null || menuItems === null)
      return [];

    return menuItems.filter((x) => x.menuCategoryId === selectedCategory);
  }, [categories, selectedCategory, menuItems]);

  if (categories === null || selectCategory === null) {
    return <span>Loading...</span>;
  }

  return (
    <div className="col-span-3 bg-gray-700 grid grid-rows-3 h-screen">
      <div
        className="grid grid-cols-4 overflow-y-scroll p-4 gap-2"
        style={{
          gridAutoRows: "calc(11vh - 1rem)", // 3 rows shown without scrolling
        }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            className={
              "rounded" + (selectedCategory === category.id ? " border-2" : "")
            }
            style={{
              backgroundColor: category.color,
            }}
            onClick={() => {
              selectCategory(category.id);
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div
        className="grid grid-cols-3 overflow-y-scroll p-4 gap-2 row-span-2"
        style={{
          gridAutoRows: "calc(13.4vh - 2rem)", // 5 rows shown without scrolling
        }}
      >
        {currentMenuItems.map((item) => (
          <button
            onClick={() => onOrder(item)}
            className="flex gap-2 p-1 rounded bg-gray-500"
          >
            <div
              className="shrink-0 w-2 h-full"
              style={{
                backgroundColor: categories.find(
                  (x) => x.id === item.menuCategoryId
                ).color,
              }}
            ></div>
            <div className="flex flex-col h-full w-full justify-between text-left">
              <span>{item.name}</span>
              <span>{item.price} Ft</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
