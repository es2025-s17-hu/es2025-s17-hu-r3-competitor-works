import React, { Fragment } from "react";
import { useMenuCategories } from "../../hooks/useMenuCategories";
import { useMenuItems } from "../../hooks/useMenuItems";
import Category from "./Category";
import DropHandle from "./DropHandle";
import AddNewCategory from "./AddNewCategory";

/**
 * Page for displaying menu categories
 */
const MenuCategoriesPage = () => {
  const { categories, setCategories } = useMenuCategories();
  const { items } = useMenuItems();

  return (
    <div className="flex flex-col gap-8 p-8">
      <h1 className="text-3xl font-semibold">Menucard Categories</h1>
      <AddNewCategory setCategories={setCategories} />

      <div className="flex flex-col mt-8">
        <DropHandle
          nextPosition={categories[0]?.priority}
          setCategories={setCategories}
        />
        {categories.map((category, idx, arr) => (
          <Fragment key={category.id}>
            <Category
              category={category}
              setCategories={setCategories}
              items={items}
            />
            <DropHandle
              setCategories={setCategories}
              nextPosition={
                idx === arr.length - 1
                  ? category.priority + 1
                  : (category.priority + arr[idx + 1].priority) / 2
              }
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default MenuCategoriesPage;
