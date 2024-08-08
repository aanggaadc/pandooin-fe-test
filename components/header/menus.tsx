import { menus } from "@/fixtures";

const isActive = (activePath: string, name: string) => {
  return (
    activePath === name.toLocaleLowerCase() && "lg:border-b-2 lg:border-white"
  );
};

export default function Menus({
  isOpen,
  activePath,
}: {
  isOpen: boolean;
  activePath: string;
}) {
  return (
    <nav
      className={`absolute z-[2] w-full font-albertSans text-white bg-primary transition-all duration-[0.3s] ease-[ease-in-out] p-0 top-[82px] inset-x-0 mx-auto lg:opacity-100 lg:visible lg:static lg:w-[unset] lg:bg-[unset] lg:m-[unset]  ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible "
      }`}
    >
      <ul className="flex flex-col font-semibold lg:flex-row lg:items-center lg:gap-6">
        {menus.map((menu) => (
          <li
            className={`p-3 md:px-[15px] md:py-[18px] ${isActive(
              activePath,
              menu.name
            )} ${menu.isButton && "lg:border lg:rounded-full"}`}
            key={menu.name}
          >
            {menu.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
