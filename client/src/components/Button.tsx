import type { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  animation?: "default" | "none" | "glaze";
  submit: "yes" | "no"
}

const defaultStyles = "rounded-md p-4 flex items-center  cursor-pointer";

const variantStyles = {
  primary: "bg-primary_purple text-white",
  secondary: "bg-tertiary_purple text-secondary_purple",
};

const submitStyle = {yes:"py-2 px-4",
  no:""
}

const variantSizes = {
  sm: "py-2 px-4",
  md: "py-3 px-6",
  lg: "py-6 px-8",
};

const animationStyles = {
  default: "shadow-md transition-all duration-400 hover:-translate-y-1 hover:shadow-xl",
  none: "",
 glaze:
  "shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%] before:bg-[position:200%_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]"
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[props.variant]} ${defaultStyles} ${variantSizes[props.size]} ${animationStyles[props.animation ?? "default"]} ${submitStyle[props.submit] }`} onClick={props.onClick}
    >
      {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}{" "}
      {props.text} {props.endIcon}
    </button>
  );
};
