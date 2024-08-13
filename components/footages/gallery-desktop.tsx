import { Image, PhotoGallery } from "../shared";
import { SeparatorIcon } from "../icons";

const GalleryDesktop = () => {
  return (
    <PhotoGallery
      className="hidden md:block"
      options={{
        Carousel: {
          infinite: false,
        },
      }}
    >
      <div className="flex gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <a
            className="flex-none w-[calc((100%_/_3)_-_24px_+_(24px_/_3))] aspect-square overflow-hidden"
            key={index}
            data-fancybox="gallery"
            href={`/images/dummy-${index + 6}.jpg`}
          >
            <Image
              className="w-full h-full object-cover object-center"
              src={`/images/dummy-${index + 6}.jpg`}
              alt="footages"
              sizes="100%"
              fill
            />
          </a>
        ))}
      </div>

      <SeparatorIcon color="#fff" stroke="#fff" className="my-6" />

      <div className="flex gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <a
            className="flex-none w-[calc((100%_/_3)_-_24px_+_(24px_/_3))] aspect-square overflow-hidden"
            key={index}
            data-fancybox="gallery"
            href={`/images/dummy-${index + 9}.jpg`}
          >
            <Image
              className="w-full h-full object-cover object-center"
              src={`/images/dummy-${index + 9}.jpg`}
              alt="footages"
              sizes="100%"
              fill
            />
          </a>
        ))}
      </div>
    </PhotoGallery>
  );
};

export default GalleryDesktop;
