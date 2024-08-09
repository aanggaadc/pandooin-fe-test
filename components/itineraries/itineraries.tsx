"use client";

import { useQuery } from "@tanstack/react-query";
import { getItinerary } from "@/api";
import Card from "./card";
import OtherCard from "./other-card";
import { ChevronLeftIcon } from "../icons";

const Itineraries = () => {
  const { data } = useQuery({
    queryKey: ["itinerary"],
    queryFn: () => getItinerary(),
  });

  const itineraries = data?.data ?? [];
  return (
    <section id="destination" className="pt-[54px] pb-6">
      <div className="wrapper">
        <div className="px-4 lg:px-0">
          <div className="flex flex-col gap-4 md:flex-row md:gap-6">
            <h2 className="text-[22px] font-unbounded font-bold text-secondary md:text-[36px]">
              Destinations
            </h2>
            <button className="flex items-center gap-4 font-albertSans text-[16px] text-secondary hover-button hover:text-gold transition-all-300">
              <div className="center-container w-10 h-10 rounded-full border-2 border-secondary chevron-container transition-all-300">
                <ChevronLeftIcon />
              </div>
              EXPLORE MORE
            </button>
          </div>
          <div className="py-6">
            {itineraries.map((itinerary, index) => (
              <Card
                key={itinerary.itinerary_id}
                data={itinerary}
                isOdd={index % 2 !== 0}
              />
            ))}
          </div>
        </div>

        <div className="hide-scrollbar py-8 px-4 flex overflow-scroll gap-4 scroll-smooth lg:px-0">
          {Array.from({ length: 4 }).map((_, index) => (
            <OtherCard key={index} />
          ))}
        </div>

        <div className="center-container py-[54px] md:py-[26px] md:justify-end">
          <button className="flex items-center gap-4 font-albertSans font-semibold text-[16px] text-secondary hover-button hover:text-gold transition-all-300">
            <div className="center-container w-10 h-10 rounded-full border-2 border-secondary chevron-container transition-all-300">
              <ChevronLeftIcon />
            </div>
            EXPLORE MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Itineraries;
