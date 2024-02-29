import React, { forwardRef, InputHTMLAttributes } from "react";

interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "email";
  placeholder: string;
  id: string;
}

const InputBox = forwardRef<HTMLInputElement, InputBoxProps>(
  ({ type = "text", placeholder = "", id, ...rest }, ref) => {
    return (
      <input
        type={type}
        id={id}
        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
        placeholder={placeholder}
        required
        ref={ref}
        {...rest}
      />
    );
  }
);

export default InputBox;
