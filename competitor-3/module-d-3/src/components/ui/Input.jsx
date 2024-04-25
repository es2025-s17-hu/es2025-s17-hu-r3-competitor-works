import React from "react";

/**
 * A styled input component
 */
const Input = (props) => {
  return (
    <input
      className="w-full border rounded-md px-4 py-2 outline-blue-600"
      {...props}
    />
  );
};

export default Input;
