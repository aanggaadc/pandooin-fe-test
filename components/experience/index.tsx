import Card from "./card";
import {
  PersonalEXPIcon,
  BestFacilitiesIcon,
  ExclusiveEXPIcon,
} from "../icons";

const experienceData = [
  {
    id: 1,
    title: "Personalized Itineraries",
    description:
      "Our premium travel services offer tailor-made itineraries crafted to suit your unique preferences and desires.",
    icon: <PersonalEXPIcon />,
  },
  {
    id: 2,
    title: "Exclusive Experiences",
    description:
      "From private charters to behind-the-scenes tours, we offer access to unique opportunities that are designed to elevate your trip to the next level.",
    icon: <ExclusiveEXPIcon />,
  },
  {
    id: 3,
    title: "Best Facilities",
    description:
      "Experience the epitome of with our premium facility, designed to provide an unparalleled level of comfort and indulgence.",
    icon: <BestFacilitiesIcon />,
  },
];
const Experience = () => {
  return (
    <section className="px-4 py-8 lg:py-[80px] lg:px-0">
      <div className="container">
        <h2 className="font-theSignature text-primary text-center text-[54px] leading-[30px] md:text-[84px] md:leading-[45px]">
          Beyond Premium
        </h2>

        <h3 className="text-center font-unbounded leading-[normal] text-secondary text-[22px] font-semibold mb-4 md:text-[32px] md:mb-[70px]">
          ELEVATE YOUR EXPERIENCE
        </h3>

        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          {experienceData.map((data) => (
            <Card
              key={data.id}
              title={data.title}
              description={data.description}
              icon={data.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
