export default function HamburgerButton({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) {
  return (
    <div className="flex items-center justify-center rounded-full w-[50px] h-[50px] border-[2px] border-primary lg:hidden">
      <button
        className={`relative z-[1] scale-[0.35] ${isOpen && "mr-1.5 mb-1"}`}
        onClick={onClick}
      >
        <div className="relative flex justify-center w-20">
          <span
            className={`absolute h-2 w-full bg-primary transition-all duration-300 ease-in-out rounded-[50px] bottom-3.5 ${
              isOpen ? "-rotate-45 origin-right top-[-25px]" : ""
            }`}
          />
          <span
            className={`absolute h-2 w-full bg-primary transition-all duration-300 ease-in-out rounded-[50px] ${
              isOpen ? "translate-x-5 opacity-0" : ""
            }`}
          />
          <span
            className={`absolute h-2 w-full bg-primary transition-all duration-300 ease-in-out rounded-[50px] top-[22px] bottom  ${
              isOpen ? "rotate-45 origin-right top-[32px]" : ""
            }`}
          />
        </div>
      </button>
    </div>
  );
}
