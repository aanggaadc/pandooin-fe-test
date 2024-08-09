"use client";

import { useState, useCallback } from "react";
import Menus from "./menus";
import HamburgerButton from "./hamburger";

export default function Navigation() {
  const [navMobile, setNavMobile] = useState(false);
  const [activePath, setActivePath] = useState("home");
  const toggleNavMobile = useCallback(() => setNavMobile((prev) => !prev), []);

  const onClickMenu = (menu: string) => {
    setActivePath(menu);
    setNavMobile(false);
  };

  return (
    <>
      <Menus
        isOpen={navMobile}
        onClose={() => setNavMobile(false)}
        activePath={activePath}
        onClickMenu={onClickMenu}
      />
      <HamburgerButton onClick={toggleNavMobile} isOpen={navMobile} />
    </>
  );
}
