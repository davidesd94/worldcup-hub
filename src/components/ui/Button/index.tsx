import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "rounded-xl px-5 py-3 font-semibold transition-all duration-300",

        variant === "primary" &&
          "bg-green-500 text-white hover:bg-green-400",

        variant === "secondary" &&
          "border border-slate-700 bg-slate-900 hover:border-green-500",

        variant === "ghost" &&
          "hover:bg-white/10",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;