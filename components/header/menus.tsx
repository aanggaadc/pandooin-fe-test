import { motion } from "framer-motion";
import { menus } from "@/fixtures";
import { scrollToElement } from "@/lib/utils";

interface MenusProps {
  isOpen: boolean;
  activePath: string;
  onClickMenu: (menu: string) => void;
  onClose: () => void;
}

const mobileBackdrop = {
  visible: { display: "block", opacity: 0.7 },
  hidden: { display: "none", opacity: 0 },
};

const isActive = (activePath: string, name: string) => {
  return (
    activePath === name.toLocaleLowerCase() && "lg:border-b-2 lg:border-white"
  );
};

const Menus: React.FC<MenusProps> = ({
  isOpen,
  activePath,
  onClickMenu,
  onClose,
}) => {
  const handleClick = (slug: string) => {
    onClickMenu(slug);
    scrollToElement(slug);
  };
  return (
    <>
      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        transition={{ duration: 0.3 }}
        variants={mobileBackdrop}
        className="fixed inset-0 z-10 bg-black lg:!hidden"
        onClick={onClose}
      />

      <nav
        className={`fixed flex items-center justify-end z-20 w-[70%] text-right font-albertSans text-primary h-full top-0 right-0 transform transition-transform duration-300 ease-in-out bg-white overflow-auto p-4 lg:p-0 lg:text-white lg:text-left lg:static lg:block lg:transform-none lg:transition-none lg:w-auto lg:h-auto lg:bg-transparent 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col font-semibold lg:flex-row lg:items-center lg:gap-6">
          {menus.map((menu) => (
            <li
              onClick={() => handleClick(menu.slug)}
              className={`cursor-pointer p-5 md:px-[15px] md:py-[18px] ${isActive(
                activePath,
                menu.slug
              )}`}
              key={menu.name}
            >
              {menu.name}
            </li>
          ))}

          <li className="cursor-pointer px-6 py-2.5 md:px-[15px] md:py-[18px] border-2 border-secondary rounded-full hover:lg:border-gold hover:lg:bg-gold lg:border-white transition-all-300">
            <a
              href="https://api.whatsapp.com/send/?phone=6283831556160&text=Hi%2C+I+wanna+ask+question+about+Zamrood&type=phone_number&app_absent=0"
              target="_blank"
            >
              Need Assistance?
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menus;
