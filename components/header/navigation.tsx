"use client";

import { useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { useIsomorphicLayoutEffect } from "framer-motion";
import Menus from "./menus";
import { HamburgerIcon } from "../icons";

export default function Navigation() {
  const params = useParams();

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

  useIsomorphicLayoutEffect(() => {
    const path = window.location.hash.replace("#", "");
    setActivePath(path || "home");
  }, [params]);

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
