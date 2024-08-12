"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

interface CarouselProps {
  effect?: string;
  autoPlay?: boolean;
  loop?: boolean;
  slidesPerView?: number;
  children: React.ReactNode;
}

export const Carousel: React.FC<CarouselProps> & {
  Item: typeof SwiperSlide;
} = ({
  children,
  autoPlay = false,
  effect = "slide",
  loop = false,
  slidesPerView = 1,
}) => {
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child) || child.type !== Carousel.Item) {
      throw new Error("Carousel component must have Carousel.Item as children");
    }
  });

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      spaceBetween={0}
      slidesPerView={slidesPerView}
      autoplay={autoPlay}
      effect={effect}
      loop={loop}
    >
      {children}
    </Swiper>
  );
};

Carousel.Item = SwiperSlide;
