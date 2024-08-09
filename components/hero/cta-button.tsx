"use client";
import { scrollToElement } from "@/lib/utils";

const ButtonCTA = () => {
  return (
    <button
      onClick={() => scrollToElement("itinerary")}
      className="h-[54px] w-[154px] rounded-full border-2  flex items-center justify-center font-albertSans text-white font-medium mx-auto hover:bg-gold hover:border-gold transition-all-300 md:m-0"
    >
      Take me there
    </button>
  );
};

export default ButtonCTA;
