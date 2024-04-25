import React, { useState } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

/**
 * Component for displaying one category
 */
const Category = ({ category, setCategories, items }) => {
  const { token } = useAuth();

  // Store the editing state
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(category.name);

  // Get the category items
  const categoryItems = items.filter((x) => x.menuCategoryId === category.id);

  /**
   * Hanlding the name editing
   */
  async function handleNameEdit() {
    setCategories((prev) =>
      prev.map((x) => (x.id === category.id ? { ...x, name } : x))
    );
    axios.put(
      `/menuCategories/${category.id}`,
      { name },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setEditing(false);
  }

  /**
   * Handle the category deleting
   */
  async function deleteCategory() {
    axios.delete(`/menuCategories/${category.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setCategories((prev) => prev.filter((x) => x.id !== category.id));
  }

  return (
    <div
      className={`rounded-md border border-neutral-400 shadow-md w-full flex p-3 items-center ${
        editing ? "" : "cursor-grab"
      }`}
      onDragStart={(e) =>
        e.dataTransfer.setData("text/plain", JSON.stringify(category))
      }
      draggable={!editing}
    >
      <div>
        {editing ? (
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        ) : (
          category.name
        )}
      </div>
      <div className="flex items-center gap-2 ml-auto">
        {editing ? (
          <>
            <Button disabled={!name} onClick={handleNameEdit}>
              Save
            </Button>
            <Button onClick={() => setEditing(false)}>Cancel</Button>
          </>
        ) : (
          <>
            <Button onClick={() => setEditing(true)}>Edit</Button>
            <Button
              disabled={categoryItems.length !== 0}
              onClick={deleteCategory}
            >
              Delete
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Category;
