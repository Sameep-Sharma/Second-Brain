import type { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

const defaultStyles = "rounded-md p-4 flex items-center";

const variantStyles = {
  primary: "bg-primary_purple text-white",
  secondary: "bg-tertiary_purple text-secondary_purple",
};
const variantSizes = {
  sm: "py-2 px-4",
  md: "py-3 px-6",
  lg: "py-6 px-8",
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[props.variant]} ${defaultStyles} ${variantSizes[props.size]}`}
    >
      {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}{" "}
      {props.text} {props.endIcon}
    </button>
  );
};
