import Image from "next/image";
import { ArrowTRIcon } from "../icons";

const Banner = () => {
  return (
    <div className="w-full flex flex-col gap-2 items-center justify-center mb-[54px] aspect-[199/84] bg-[linear-gradient(0deg,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.36)_100%),url('/images/banner.webp')] bg-center bg-no-repeat bg-cover bg-\[lightgray\] md:mb-[72px] md:aspect-[548/51] md:p-6 md:flex-row md:justify-between">
      <Image
        className="w-[145px]"
        src="/logo-white.png"
        alt="logo"
        width={155}
        height={70}
      />

      <div>
        <p className="text-sm leading-[16.8px] text-center font-albertSans text-white mb-2">
          Want to see other destinations? <br className="md:hidden" /> Check us
          out at our website
        </p>
        <a
          target="_blank"
          className="text-white flex items-center justify-center md:justify-end gap-2"
          href="https://pandooin.com"
        >
          <span className="font-bold leading-[19.2px] underline font-albertSans md:text-xl md:leading-6">
            pandooin.com
          </span>

          <ArrowTRIcon />
        </a>
      </div>
    </div>
  );
};

export default Banner;
