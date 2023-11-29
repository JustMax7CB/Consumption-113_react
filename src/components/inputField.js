import React from "react";

const InputField = ({ type, mode, placeholder }) => {
  return (
    <div className="container input-group mb-3">
      <input
        className="heli-number form-control"
        type={type}
        inputMode={mode}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
