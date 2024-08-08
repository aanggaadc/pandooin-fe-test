import { menus } from "@/fixtures";

const isActive = (activePath: string, name: string) => {
  return (
    activePath === name.toLocaleLowerCase() && "md:border-b-2 md:border-white"
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
      className={`absolute z-[2] w-full font-albertSans text-white bg-primary transition-all duration-[0.3s] ease-[ease-in-out] p-0 top-[82px] inset-x-0 mx-auto md:opacity-100 md:visible md:static md:w-[unset] md:bg-[unset] md:m-[unset] md:p-[unset] ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible "
      }`}
    >
      <ul className="flex flex-col font-semibold md:flex-row md:items-center md:gap-6">
        {menus.map((menu) => (
          <li
            className={`px-[15px] py-[18px] ${isActive(
              activePath,
              menu.name
            )} ${menu.isButton && "md:border md:rounded-full"}`}
            key={menu.name}
          >
            {menu.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
