import { useEffect, useState } from "react";
import { useMenuCategories } from "../../hooks/useMenuCategories";
import { useMenuItems } from "../../hooks/useMenuItems";
import MenuItemTableRow from "./MenuItemTableRow";
import CreateMenuItem from "./CreateMenuItem";

/**
 * Page for displaying the menu items
 */
const MenuItemsPage = () => {
  const { categories, setCategories } = useMenuCategories();
  const { items, setItems } = useMenuItems();

  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    if (!selectedCategory) {
      if (categories.length > 0) {
        setSelectedCategory(categories[0].id);
      }
    }
  }, [categories, selectedCategory]);

  // TODO
  const selectedItems = items.filter(
    (x) => x.menuCategoryId == selectedCategory
  );

  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-center">Menu Items</h1>

      <CreateMenuItem
        selectedMenuCategoryId={selectedCategory}
        categories={categories}
        setItems={setItems}
      />

      {/* Category select */}
      <select
        className="w-[500px] border rounded-md px-4 py-2 self-center"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      {/* Table */}
      <div className="w-full border">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-left font-semibold">Name</th>
              <th className="p-3 text-left font-semibold">Type</th>
              <th className="p-3 text-left font-semibold">Price</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {selectedItems.map((item) => (
              <MenuItemTableRow
                key={item.id}
                item={item}
                setItems={setItems}
                categories={categories}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenuItemsPage;
