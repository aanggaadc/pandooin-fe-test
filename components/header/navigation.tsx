"use client";

import { useState, useCallback } from "react";
import Menus from "./menus";
import { HamburgerIcon } from "../icons";

export default function Navigation() {
  const [navMobile, setNavMobile] = useState(false);
  const [activePath, setActivePath] = useState("home");
  const toggleNavMobile = useCallback(() => {
    setNavMobile((prev) => !prev);
    if (navMobile) {
      document.body.removeAttribute("style");
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [navMobile]);

  const onClose = () => {
    setNavMobile(false);
    document.body.removeAttribute("style");
  };

  const onClickMenu = (menu: string) => {
    setActivePath(menu);
    onClose();
  };

  return (
    <>
      <Menus
        isOpen={navMobile}
        onClose={onClose}
        activePath={activePath}
        onClickMenu={onClickMenu}
      />

      <button className="lg:hidden" onClick={toggleNavMobile}>
        <HamburgerIcon />
      </button>
    </>
  );
}
