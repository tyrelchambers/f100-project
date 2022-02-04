import React from "react";

const Input = ({ placeholder, name, onInput, type, width = "w-full" }) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      onInput={onInput}
      type={type}
      className={`p-2 border-2 border-gray-600 rounded-lg bg-slate-900 text-white ${width}`}
    />
  );
};

export default Input;
