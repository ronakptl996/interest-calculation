import React from "react";

const InputField = ({ value, placeholder, type, onChange, min, max }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <input
      type={type}
      value={value}
      min={min}
      max={max}
      step={type === "range" ? 0.5 : 1}
      className="form-control"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default InputField;
