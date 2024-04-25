import { useEffect, useState } from "react";
import {
  createCategort,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../../api";
import SmallButton from "../../components/SmallButton";
import AddButton from "../../components/AddButton";

function MenuItem({ item, onEdit }) {
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    if (item.id === undefined) {
      setEditing(item.name);
    }
  }, []);

  return (
    <li className="px-4 py-2 flex items-center gap-4 rounded border border-indigo-700">
      {editing === null ? (
        <button
          className="font-medium w-full text-left"
          onClick={() => setEditing(item.name)}
        >
          {item.name}
        </button>
      ) : (
        <input
          className="font-medium w-full"
          autoFocus
          value={editing}
          onChange={(e) => setEditing(e.target.value)}
        />
      )}
      <ul className="shrink-0 flex items-center gap-2">
        {editing === null ? (
          <>
            <li>
              <SmallButton onClick={() => setEditing(item.name)}>
                Edit
              </SmallButton>
            </li>
            <li>
              <SmallButton
                onClick={() => {
                  deleteCategory(item.id)
                    .then(() => onEdit())
                    .catch((e) => {
                      console.error(e);
                      alert(
                        "Could not delete category " +
                          JSON.stringify(item.name) +
                          ". Categories that have menu items in them cannot be deleted."
                      );
                    });
                }}
              >
                Delete
              </SmallButton>
            </li>
          </>
        ) : (
          <>
            {item.id !== undefined ? (
              <>
                <li>
                  <SmallButton
                    onClick={async () => {
                      await updateCategory(item.id, { name: editing });
                      setEditing(null);
                      onEdit();
                    }}
                  >
                    Save
                  </SmallButton>
                </li>
                <li>
                  <SmallButton onClick={() => setEditing(null)}>
                    Cancel
                  </SmallButton>
                </li>
              </>
            ) : (
              <>
                <li>
                  <SmallButton
                    onClick={async () => {
                      await createCategort({ ...item, name: editing });
                      setEditing(null);
                      onEdit();
                    }}
                  >
                    Create
                  </SmallButton>
                </li>
                <li>
                  <SmallButton onClick={() => onEdit()}>Cancel</SmallButton>
                </li>
              </>
            )}
          </>
        )}
      </ul>
    </li>
  );
}

export default function MenuCategories() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    (async () => {
      setItems(await getCategories());
    })();
  }, []);

  if (items === null) {
    return <span>Loading...</span>;
  }

  return (
    <main className="py-16 relative">
      <h1 className="text-center font-black text-3xl mb-16">
        Menucard Categories
      </h1>
      <AddButton
        onClick={() => {
          setItems((items) =>
            items[0].id !== undefined
              ? [{ name: "", priority: (items[0].priority ?? 1) - 1 }, ...items]
              : items
          );
        }}
      />
      <ul className="flex flex-col gap-2 w-1/2 mx-auto">
        {items.map((x) => (
          <MenuItem
            key={x.id ?? "adding"}
            item={x}
            onEdit={async () => {
              setItems(await getCategories());
            }}
          />
        ))}
      </ul>
    </main>
  );
}
