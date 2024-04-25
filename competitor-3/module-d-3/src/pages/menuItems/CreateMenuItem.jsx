import React, { useState } from "react";
import Button from "../../components/ui/Button";
import CreateMenuItemModal from "./CreateMenuItemModal";

/**
 * Component that displays that plus
 * @returns
 */
const CreateMenuItem = ({ selectedMenuCategoryId, categories, setItems }) => {
  const [adding, setAdding] = useState(false);

  return (
    <div className="self-end">
      <CreateMenuItemModal
        open={adding}
        onClose={() => setAdding(false)}
        selectedMenuCategoryId={selectedMenuCategoryId}
        categories={categories}
        setItems={setItems}
      />
      <Button onClick={() => setAdding(true)}>+</Button>
    </div>
  );
};

export default CreateMenuItem;
