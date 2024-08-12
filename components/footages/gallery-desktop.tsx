import { Image } from "../shared";
import { SeparatorIcon } from "../icons";

const GalleryDesktop = () => {
  return (
    <div className="hidden md:block">
      <div className="flex gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <Image
            key={index}
            wrapper={{
              className:
                "relative flex-none w-[calc((100%_/_3)_-_24px_+_(24px_/_3))] aspect-square overflow-hidden",
            }}
            className="w-full h-full object-cover object-center"
            src={`/images/dummy-${index + 6}.jpg`}
            alt="footages"
            sizes="100%"
            fill
          />
        ))}
      </div>

      <SeparatorIcon color="#fff" stroke="#fff" className="my-6" />

      <div className="flex gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <Image
            key={index}
            wrapper={{
              className:
                "relative flex-none w-[calc((100%_/_3)_-_24px_+_(24px_/_3))] aspect-square overflow-hidden",
            }}
            className="w-full h-full object-cover object-center"
            src={`/images/dummy-${index + 9}.jpg`}
            alt="footages"
            sizes="100%"
            fill
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryDesktop;
