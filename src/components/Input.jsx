import React from "react";

const Input = ({
  placeholder,
  name,
  onInput,
  type,
  width = "w-full",
  value,
}) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      onInput={onInput}
      type={type}
      value={value}
      className={`p-2 border-2 border-gray-600 rounded-lg bg-slate-900 text-white ${width}`}
    />
  );
};

export default Input;
