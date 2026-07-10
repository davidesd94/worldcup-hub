type FilterButtonProps = {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

const FilterButton = ({
  active,
  children,
  onClick,
}: FilterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-full
        px-5
        py-2
        text-sm
        font-semibold
        transition-all
        duration-300

        ${
          active
            ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
            : "bg-slate-800 text-slate-300 hover:bg-slate-700"
        }
      `}
    >
      {children}
    </button>
  );
};

export default FilterButton;