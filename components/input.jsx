import React from "react";

const Input = (props) => {
  const { type, placeholder, ...inputProps } = props;
  return (
    <div className="w-full p-2">
      <label className="relative block cursor-text w-full">
        <input
          type={type}
          className={`h-14 w-full border border-primary rounded-xl outline-none px-4 peer`}
          required
          {...inputProps}
        />
        <span className="absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs transition-all">
          {placeholder}
        </span>
      </label>
    </div>
  );
};

export default Input;
