"use client";

import { Image, Carousel } from "../shared";

const GalleryMobile = () => {
  return (
    <div className="w-full aspect-[179/128] md:hidden">
      <Carousel autoPlay effect="fade">
        {Array.from({ length: 6 }).map((_, index) => (
          <Carousel.Item key={index}>
            <Image
              src={`/images/dummy-${index + 6}.jpg`}
              alt={`footages-${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default GalleryMobile;
