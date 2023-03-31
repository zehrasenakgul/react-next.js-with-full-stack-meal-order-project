import React from "react";
const Input = (props) => {
  const { type, touched, errorMessage, placeholder, ...inputProps } = props;
  return (
    <div className={`${type == 'checkbox' ? "p-0" : "w-full p-2"}`}>
      <label className={`relative block cursor-text w-full ${type == 'checkbox' ? "flex items-center" : ""}`}>
        <input
          type={type}
          className={`h-14 w-full border border-primary rounded-xl outline-none px-4 peer 
          ${touched && errorMessage ? "text-red-500" : "text-black"}`}
          {...inputProps}
        />
        {type != "checkbox" &&
          <span className="absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs transition-all">
            {placeholder}
          </span>}

      </label>
      {touched && <span className="text-xs text-black">{errorMessage}</span>}
    </div>
  );
};
export default Input;
