import Image from "next/image";
import HeaderWrapper from "./wrapper";
import Navigation from "./navigation";

export default async function Header() {
  return (
    <header className="w-full fixed top-0 z-50">
      <HeaderWrapper>
        <h1 className="absolute w-px h-px overflow-hidden -m-px p-0 border-0">
          Zamrood
        </h1>

        <div className="flex items-center justify-between max-w-screen-desktop mx-auto">
          <Image
            className="w-[134px] lg:hidden"
            src="/logo-color.png"
            alt="logo"
            width={135}
            height={50}
          />

          <Image
            className="w-[134px] hidden lg:block"
            src="/logo-white.png"
            alt="logo"
            width={135}
            height={50}
          />

          <Navigation />
        </div>
      </HeaderWrapper>
    </header>
  );
}
