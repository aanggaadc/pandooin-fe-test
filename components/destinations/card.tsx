"use client";

import { Carousel } from "../shared";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CardProps {
  title: string;
  subTitle: string;
  images: string[];
  description: string;
  discount: string;
  price: string;
  isOdd: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  subTitle,
  description,
  discount,
  price,
  images,
  isOdd,
}) => {
  return (
    <div className="py-6 lg:py-[72px]">
      <div className="flex flex-col gap-4 md:flex-row">
        <div
          className={cn(
            "w-full aspect-[199/128] overflow-hidden md:w-6/12",
            isOdd && "md:order-2"
          )}
        >
          <Carousel autoPlay effect="fade" loop>
            {images?.map((image, index) => (
              <Carousel.Item key={index}>
                <Image
                  className="w-full h-full object-cover object-center"
                  src={image}
                  alt="destination"
                  width={320}
                  height={180}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <div className="flex flex-col justify-between md:w-6/12 md:aspect-[199/128]">
          <div className="flex flex-col">
            <p className="text-xs mb-1 font-albertSans text-secondary lg:text-base lg:leading-[19.2px]">
              {subTitle}
            </p>
            <h3 className="text-base mb-2 font-unbounded font-bold text-primary lg:text-4xl lg:leading-[44.64px]">
              {title}
            </h3>
            <p className="leading-tight font-albertSans text-xs text-secondary mb-2 lg:text-base lg:leading-[19.2px] md:order-4">
              {description}
            </p>
            <p className="text-xs font-bold font-albertSans text-secondary lg:text-base lg:leading-[19.2px] ">
              Organized by Pandooin
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span>
              <p className="text-xs text-secondary font-albertSans leading-[14.4px] lg:text-base lg:leading-[19.2px]">
                Start from
              </p>
              <p className="font-medium font-unbounded text-[#B8B8B8] leading-[19.84px] line-through hidden md:block">
                {discount}
              </p>
              <p className="text-lg leading-[22.32px] text-secondary font-medium font-unbounded lg:text-[28px] lg:leading-[34.72px]">
                {price}
              </p>
            </span>
            <button className="w-[116px] h-[54px] center-container rounded-full border-2 border-secondary text-secondary font-albertSans font-bold hover:bg-gold hover:border-gold hover:text-white transition-all-300">
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
