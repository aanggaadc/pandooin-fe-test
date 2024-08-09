"use client";
import Image from "next/image";
import { Carousel } from "../shared";

const GalleryMobile = () => {
  return (
    <div className="w-full aspect-[179/128] md:hidden">
      <Carousel autoPlay effect="fade" loop>
        <Carousel.Item>
          <Image
            className="w-full h-full object-cover object-center"
            src="/images/dummy-6.jpg"
            alt="footages"
            width={179}
            height={128}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="w-full h-full object-cover object-center"
            src="/images/dummy-7.jpg"
            alt="footages"
            width={179}
            height={128}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="w-full h-full object-cover object-center"
            src="/images/dummy-8.jpg"
            alt="footages"
            width={179}
            height={128}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="w-full h-full object-cover object-center"
            src="/images/dummy-9.jpg"
            alt="footages"
            width={179}
            height={128}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="w-full h-full object-cover object-center"
            src="/images/dummy-10.jpg"
            alt="footages"
            width={179}
            height={128}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="w-full h-full object-cover object-center"
            src="/images/dummy-11.jpg"
            alt="footages"
            width={179}
            height={128}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default GalleryMobile;
