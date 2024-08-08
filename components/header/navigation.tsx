"use client";

import { useState, useCallback } from "react";
import Menus from "./menus";
import HamburgerButton from "./hamburger";

export default function Navigation() {
  const [navMobile, setNavMobile] = useState(false);
  const [activePath, setActivePath] = useState("homepage");
  const toggleNavMobile = useCallback(() => setNavMobile((prev) => !prev), []);

  return (
    <div className="flex md:gap-2">
      <Menus isOpen={navMobile} activePath={activePath} />

      <HamburgerButton onClick={toggleNavMobile} isOpen={navMobile} />
    </div>
  );
}
