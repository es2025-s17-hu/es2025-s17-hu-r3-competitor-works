import React, { useState } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

/**
 * Component for creating a new menu category
 */
const AddNewCategory = ({ setCategories }) => {
  const { token } = useAuth();
  // State
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState("");

  /**
   * Handle form submit
   */
  async function handleFormSubmit(e) {
    e.preventDefault();

    console.log("first");
    const { data } = await axios.post(
      "/menuCategories",
      { name },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log("hallo");

    setCategories((prev) => [data, ...prev]);
    setAdding(false);
    setName("");
  }

  return (
    <div className="ml-auto">
      {adding ? (
        <form className="flex items-center gap-2" onSubmit={handleFormSubmit}>
          <Input
            placeholder="Category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button disabled={!name}>Create</Button>
        </form>
      ) : (
        <>
          <Button onClick={() => setAdding(true)}>+</Button>
        </>
      )}
    </div>
  );
};

export default AddNewCategory;
