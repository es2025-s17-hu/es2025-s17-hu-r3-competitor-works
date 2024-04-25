import React, { useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

/**
 * COmponent for dispaltyong the modal for editing
 */
const CreateMenuItemModal = ({
  open,
  onClose,
  setItems,
  selectedMenuCategoryId,
  categories,
}) => {
  const { token } = useAuth();
  console.log(selectedMenuCategoryId);

  // State
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("FOOD");
  const [menuCategoryId, setMenuCategoryId] = useState(selectedMenuCategoryId);

  if (!open) return null;

  /**
   * Save the menu item
   */
  async function handleSave() {
    const { data } = await axios.post(
      `/menuItems`,
      {
        name,
        price: Number(price),
        type,
        menuCategoryId: Number(menuCategoryId),
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setItems((prev) => [...prev, data]);
    onClose();
  }

  return (
    <>
      <div className="bg-black/10 z-[50] fixed inset-0" />
      <div className="w-[400px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-[100] p-8 border border-neutral-600 flex items-center flex-col gap-4">
        <h3 className="text-xl font-semibold">Create Menu Item</h3>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        {/* Type select */}
        <select
          className="w-full border rounded-md px-4 py-2 self-center"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {["FOOD", "DRINK", "OTHER"].map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        {/* Category select */}
        <select
          className="w-full border rounded-md px-4 py-2 self-center"
          value={menuCategoryId || selectedMenuCategoryId}
          onChange={(e) => setMenuCategoryId(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-2">
          <Button onClick={handleSave}>Create</Button>
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreateMenuItemModal;
