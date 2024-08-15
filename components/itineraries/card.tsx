"use client";

import { Carousel, Image } from "../shared";
import { cn, formatPrice } from "@/lib/utils";

interface CardProps {
  data: IItinerary;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="py-6 lg:py-[72px] flex flex-col gap-4 md:flex-row md:odd:flex-row-reverse">
      <div className={cn("w-full aspect-[199/128] overflow-hidden md:w-6/12")}>
        <Carousel autoPlay effect="fade">
          {data.related_galleries?.map((gallery, index) => (
            <Carousel.Item key={index}>
              <Image src={gallery.src} alt="destination" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="flex flex-col justify-between md:w-6/12 md:aspect-[199/128]">
        <div className="flex flex-col">
          <p className="text-xs mb-1 font-albertSans text-secondary lg:text-base lg:leading-[19.2px]">
            {data.itinerary_day} Days {data.itinerary_day - 1} Nights
          </p>
          <h3 className="text-base mb-2 font-unbounded font-semibold text-primary lg:text-4xl lg:leading-[44.64px] line-clamp-2">
            {data.itinerary_name}
          </h3>
          <p className="leading-tight font-albertSans text-xs text-secondary line-clamp-4 mb-2 lg:text-base lg:leading-[19.2px] md:order-4">
            {data.itinerary_short_description}
          </p>
          <p className="text-xs font-bold font-albertSans text-secondary lg:text-base lg:leading-[19.2px] ">
            Organized by {data.partner_name}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span>
            <p className="text-xs text-secondary font-albertSans leading-[14.4px] lg:text-base lg:leading-[19.2px]">
              Start from
            </p>

            {data.related_variant.itinerary_variant_disc_price !== "0" && (
              <p className="font-medium font-unbounded text-[#B8B8B8] leading-[19.84px] line-through hidden md:block">
                IDR{" "}
                {formatPrice(data.related_variant.itinerary_variant_disc_price)}
              </p>
            )}

            <p className="text-lg leading-[22.32px] text-secondary font-medium font-unbounded lg:text-[28px] lg:leading-[34.72px]">
              IDR{" "}
              {formatPrice(data.related_variant.itinerary_variant_pub_price)}
            </p>
          </span>
          <a
            href={`https://www.zamrood.com/destination/${data.itinerary_slug}`}
            target="_blank"
            className="w-[116px] h-[54px] center-container rounded-full border-2 border-secondary text-secondary font-albertSans font-bold hover:bg-gold hover:border-gold hover:text-white transition-all-300"
          >
            See Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
