"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface HeaderWrapperProps {
  children: React.ReactNode;
}

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={cn(
        "p-4 bg-white lg:py-7 xl:px-0 transition-all-300",
        isScrolled
          ? "lg:bg-[rgba(0,0,0,0.6)] lg:backdrop-blur-sm lg:py-4"
          : "lg:bg-transparent"
      )}
    >
      {children}
    </div>
  );
};

export default HeaderWrapper;
