import clsx from "clsx";
import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={clsx(
        "w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-green-500",
        className
      )}
      {...props}
    />
  );
};

export default Input;