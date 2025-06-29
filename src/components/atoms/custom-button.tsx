import React from "react";

type Props = {
  children: string;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

const CustomButton = (props: Props) => {
  const { children, buttonProps } = props;

  return (
    <button
      {...buttonProps}
      className={`p-2 px-6 rounded-full cursor-pointer ${
        buttonProps?.className ? buttonProps?.className : ""
      }`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
