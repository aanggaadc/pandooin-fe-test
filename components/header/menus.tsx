import { menus } from "@/fixtures";
import { scrollToElement } from "@/lib/utils";

interface MenusProps {
  isOpen: boolean;
  activePath: string;
  onClickMenu: (menu: string) => void;
}

const isActive = (activePath: string, name: string) => {
  return (
    activePath === name.toLocaleLowerCase() && "lg:border-b-2 lg:border-white"
  );
};

const Menus: React.FC<MenusProps> = ({ isOpen, activePath, onClickMenu }) => {
  const handleClick = (slug: string) => {
    onClickMenu(slug);
    scrollToElement(slug);
  };
  return (
    <nav
      className={`absolute z-[2] w-full font-albertSans text-white bg-primary transition-all duration-[0.3s] ease-[ease-in-out] p-0 top-[82px] inset-x-0 mx-auto lg:opacity-100 lg:visible lg:static lg:w-[unset] lg:bg-[unset] lg:m-[unset]  ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible "
      }`}
    >
      <ul className="flex flex-col font-semibold lg:flex-row lg:items-center lg:gap-6">
        {menus.map((menu) => (
          <li
            onClick={() => handleClick(menu.slug)}
            className={`cursor-pointer p-3 md:px-[15px] md:py-[18px] ${isActive(
              activePath,
              menu.slug
            )}`}
            key={menu.name}
          >
            {menu.name}
          </li>
        ))}

        <li className="cursor-pointer p-3 md:px-[15px] md:py-[18px] lg:border lg:rounded-full hover:lg:border-gold hover:lg:bg-gold transition-all-300">
          <a
            href="https://api.whatsapp.com/send/?phone=6283831556160&text=Hi%2C+I+wanna+ask+question+about+Zamrood&type=phone_number&app_absent=0"
            target="_blank"
          >
            Need Assistance?
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menus;
