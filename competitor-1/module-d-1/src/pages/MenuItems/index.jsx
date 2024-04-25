import { createContext, useEffect, useState, useContext } from "react";
import {
  deleteCategory,
  deleteItem,
  getCategories,
  getItems,
  updateCategory,
  updateItem,
} from "../../api";
import AddButton from "../../components/AddButton";
import { Input } from "../../components/Input";
import SmallButton from "../../components/SmallButton";

function TableHead({ children }) {
  return <div className="px-2 py-1 bg-gray-300">{children}</div>;
}

function TableItem({ children, item, ...rest }) {
  const modal = useContext(ItemEditModalContext);

  return (
    <button
      className="px-2 py-1 text-left"
      {...rest}
      onClick={() => modal.open(item)}
    >
      {children}
    </button>
  );
}

const ItemEditModalContext = createContext({
  open(item) {},
});

function ItemEditModal({ onClose, children, categories }) {
  const [item, setItem] = useState(null);

  console.log(item);

  return (
    <ItemEditModalContext.Provider
      value={{
        open(item) {
          setItem(item);
        },
      }}
    >
      <div
        className={
          "fixed z-50 bg-black/50 left-0 right-0 top-0 bottom-0 transition-all flex items-center justify-center " +
          (item !== null ? "opacity-1" : "opacity-0 pointer-events-none")
        }
        onClick={() => setItem(null)}
      >
        <div
          className="p-4 bg-white rounded-lg shadow"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            Edit Menu Item
          </h2>
          <Input
            label="Name"
            value={(item ?? {}).name}
            onChange={(e) =>
              setItem((item) => ({ ...item, name: e.target.value }))
            }
          />
          <Input
            label="Price"
            value={(item ?? {}).price}
            onChange={(e) =>
              setItem((item) => ({
                ...item,
                price: parseFloat(e.target.value),
              }))
            }
          />
          <p className="text-sm text-gray-500 mb-1">Type</p>
          <select
            className={"px-2 py-1 rounded border mb-2 w-full"}
            name="type"
            value={(item ?? {}).type}
            onChange={(e) =>
              setItem((item) => ({ ...item, type: e.target.value }))
            }
          >
            <option value="DRINK">Drink</option>
            <option value="FOOD">Food</option>
            <option value="OTHER">Other</option>
          </select>
          <p className="text-sm text-gray-500 mb-1">Category</p>
          <select
            className={"px-2 py-1 rounded border mb-2 w-full"}
            name="category"
            value={(item ?? {}).category}
            onChange={(e) =>
              setItem((item) => ({ ...item, category: e.target.value }))
            }
          >
            {categories.map((x) => (
              <option key={x.id} value={x.id}>
                {x.name}
              </option>
            ))}
          </select>
          <SmallButton
            onClick={async () => {
              await updateItem(item.id, item);
              setItem(null);
              onClose();
            }}
          >
            Save
          </SmallButton>
          <SmallButton
            onClick={async () => {
              await deleteItem(item.id);
              setItem(null);
              onClose();
            }}
          >
            Delete
          </SmallButton>
          <SmallButton
            onClick={async () => {
              setItem(null);
              onClose();
            }}
          >
            Cancel
          </SmallButton>
        </div>
      </div>
      {children}
    </ItemEditModalContext.Provider>
  );
}

export default function MenuItems() {
  const [categories, setCategories] = useState(null);
  const [items, setItems] = useState(null);

  const [selectedCategory, selectCategory] = useState(null);

  useEffect(() => {
    (async () => {
      const cat = await getCategories();
      setCategories(cat);
      selectCategory(cat[0].id);
      setItems(await getItems());
    })();
  }, []);

  if (items === null || categories === null) {
    return <span>Loading...</span>;
  }

  const currentItems = items.filter(
    (x) => x.menuCategoryId === selectedCategory
  );
  console.log(items);

  return (
    <ItemEditModal
      categories={categories}
      onClose={async () => {
        const cat = await getCategories();
        setCategories(cat);
        selectCategory(cat[0].id);
        setItems(await getItems());
      }}
    >
      <main className="py-16 relative">
        <h1 className="text-center font-black text-3xl mb-16">Menu Items</h1>
        <AddButton onClick={() => {}} />
        <select
          className="mb-16 px-2 py-1 border rounded block mx-auto"
          value={selectedCategory}
          onChange={(e) => selectCategory(e.target.value)}
        >
          {categories.map((x) => (
            <option key={x.id}>{x.name}</option>
          ))}
        </select>
        <div className="grid grid-cols-3 w-1/2 mx-auto border">
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Price</TableHead>
          {currentItems.flatMap((x) => {
            return [
              <TableItem item={x} key={x.id + "_name"}>
                {x.name}
              </TableItem>,
              <TableItem item={x} key={x.id + "_type"}>
                {x.type}
              </TableItem>,
              <TableItem item={x} key={x.id + "_price"}>
                {x.price}
              </TableItem>,
            ];
          })}
        </div>
      </main>
    </ItemEditModal>
  );
}
