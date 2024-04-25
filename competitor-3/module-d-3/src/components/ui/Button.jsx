import React from "react";

/**
 * Styled button component
 */
const Button = (props) => {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-sm rounded-md px-4 py-2 transition-all text-white font-medium disabled:bg-neutral-300 disabled:text-neutral-500"
      {...props}
    />
  );
};

export default Button;
