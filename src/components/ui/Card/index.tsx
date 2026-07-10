import type { ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx(
        `
        group
        relative
        overflow-hidden

        rounded-2xl

        border
        border-white/10

        bg-white/5

        backdrop-blur-xl

        shadow-2xl
        shadow-black/20

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-green-500/30
        hover:shadow-green-500/10

        before:absolute
        before:inset-0
        before:bg-gradient-to-br
        before:from-white/5
        before:to-transparent
        before:opacity-0
        before:transition-opacity
        before:duration-300
        hover:before:opacity-100
        `,
        className
      )}
    >
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;