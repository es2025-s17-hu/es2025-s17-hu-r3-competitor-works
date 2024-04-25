import React from "react";
import { useNavigate } from "react-router-dom";

const BUTTONS = [
  {
    label: "Menu Categories",
    href: "/menuCategories",
    disabled: false,
  },
  {
    label: "Menu Items",
    href: "/menuItems",
    disabled: false,
  },
  {
    label: "Tables",
    disabled: true,
  },
  {
    label: "Users",
    disabled: true,
  },
  {
    label: "Statistics",
    disabled: true,
  },
  {
    label: "Preferences",
    disabled: true,
  },
];

/**
 * Display the index page
 */
const IndexPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-5xl px-16 pt-8 text-center">Admin Dashboard</h1>
      <div className="w-full h-full px-16 py-8 grid grid-cols-3 gap-4">
        {BUTTONS.map((b, idx) => (
          <button
            key={idx}
            className={`px-4 py-6 text-2xl font-semibold rounded-md disabled:text-neutral-300 border`}
            disabled={b.disabled}
            onClick={() => navigate(b.href)}
          >
            {b.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default IndexPage;
