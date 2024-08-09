import Image from "next/image";
import { SeparatorIcon } from "../icons";

const GalleryDesktop = () => {
  return (
    <div className="hidden md:block">
      <div className="flex gap-6">
        <div className="flex-none w-[calc((100%_/_3)_-_24px_+_(24px_/_3))] aspect-square overflow-hidden">
          <Image
            className="w-full h-full object-cover object-center"
            src="/images/dummy-6.jpg"
            alt="footages"
            width={179}
            height={128}
          />
        </div>
        <div className="flex-none w-[calc((100%_/_3)_-_24px_+_(24px_/_3))] aspect-square overflow-hidden">
          <Image
            className="w-full h-full object-cover object-center"
            src="/images/dummy-7.jpg"
            alt="footages"
            width={179}
            height={128}
          />
        </div>
        <div className="flex-none w-[calc((100%_/_3)_-_24px_+_(24px_/_3))] aspect-square overflow-hidden">
          <Image
            className="w-full h-full object-cover object-center"
            src="/images/dummy-8.jpg"
            alt="footages"
            width={179}
            height={128}
          />
        </div>
      </div>

      <SeparatorIcon color="#fff" stroke="#fff" className="my-6" />

      <div className="flex gap-6">
        <div className="flex-none w-[calc((100%_/_3)_-_24px_+_(24px_/_3))] aspect-square overflow-hidden">
          <Image
            className="w-full h-full object-cover object-center"
            src="/images/dummy-9.jpg"
            alt="footages"
            width={179}
            height={128}
          />
        </div>
        <div className="flex-none w-[calc((100%_/_3)_-_24px_+_(24px_/_3))] aspect-square overflow-hidden">
          <Image
            className="w-full h-full object-cover object-center"
            src="/images/dummy-10.jpg"
            alt="footages"
            width={179}
            height={128}
          />
        </div>
        <div className="flex-none w-[calc((100%_/_3)_-_24px_+_(24px_/_3))] aspect-square overflow-hidden">
          <Image
            className="w-full h-full object-cover object-center"
            src="/images/dummy-11.jpg"
            alt="footages"
            width={179}
            height={128}
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryDesktop;
