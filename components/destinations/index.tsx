import Card from "./card";
import OtherCard from "./other-card";
import { ChevronLeftIcon } from "../icons";

const Destinations = () => {
  return (
    <section className="pt-[54px] pb-6">
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
            {Array.from({ length: 4 }).map((_, index) => (
              <Card
                key={index}
                title=" Paradise Gateway: Labuan Bajo"
                subTitle="7 DAYS 6 NIGHT"
                description="Labuan Bajo is a tropical paradise nestled in the westernmost part
              of Flores Island, Indonesia. With its stunning landscapes,
              crystal-clear waters, and vibrant marine life, it's a gateway to
              explore the mesmerizing Komodo National Park."
                discount="IDR 9,999,999"
                price="IDR 5,200,000"
                images={[
                  "/images/dummy.jpg",
                  "/images/dummy-3.jpg",
                  "/images/dummy-2.jpg",
                ]}
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

export default Destinations;
