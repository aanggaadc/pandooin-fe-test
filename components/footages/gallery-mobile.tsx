"use client";

import { Image, Carousel, PhotoGallery } from "../shared";

const GalleryMobile = () => {
  return (
    <PhotoGallery
      className="w-full aspect-[179/128] md:hidden"
      options={{
        Carousel: {
          infinite: false,
        },
      }}
    >
      <Carousel autoPlay effect="fade">
        {Array.from({ length: 6 }).map((_, index) => (
          <Carousel.Item key={index}>
            <a data-fancybox="gallery" href={`/images/dummy-${index + 6}.jpg`}>
              <Image
                src={`/images/dummy-${index + 6}.jpg`}
                alt={`footages-${index + 1}`}
              />
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    </PhotoGallery>
  );
};

export default GalleryMobile;
