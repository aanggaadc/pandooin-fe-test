import Image from "next/image";
import { SeparatorIcon } from "../icons";

const Discover = () => {
  return (
    <section id="customize-your-trip" className="p-4 md:px-0 md:py-[72px]">
      <div className="wrapper mb-[80px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <Image
            className="block w-[50%] mx-auto max-w-[329px]"
            src="/icons/ic-discover.png"
            alt="discover"
            width={796}
            height={376}
          />

          <div className="flex-grow">
            <h2 className="text-[22px] text-secondary text-center font-unbounded font-semibold mb-2 leading-tight md:text-left lg:text-[32px]">
              Discover Tailored Experiences
            </h2>
            <p className="max-w-[536px] text-xs font-albertSans text-center mb-6 md:text-left md:mb-4 lg:text-[16px]">
              Create your own journey, personalized to suit your preferences and
              interests, ensuring a once-in-a-lifetime adventure awaits.
            </p>

            <a
              href="https://pandooin.com/id/tailor-made/create"
              target="_blank"
              className="w-full h-[54px] rounded-full bg-secondary center-container font-albertSans text-white font-semibold md:w-[200px] hover:bg-gold transition-all-300"
            >
              Customize Your Trip
            </a>
          </div>
        </div>
      </div>
      <SeparatorIcon className="wrapper" />
    </section>
  );
};

export default Discover;
