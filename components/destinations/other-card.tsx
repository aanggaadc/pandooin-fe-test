import Image from "next/image";

const OtherCard = () => {
  return (
    <div className="flex-none w-[256px] lg:w-[calc((100%_/_4)_-_16px_+_(16px_/_4))]">
      <div className="w-full aspect-square overflow-hidden mb-6">
        <Image
          className="w-full h-full object-cover object-center"
          src="/images/dummy-2.jpg"
          alt="other"
          width={256}
          height={256}
        />
      </div>

      <p className="text-xs mb-1 font-albertSans text-secondary">
        7 DAYS 6 NIGHT
      </p>
      <h3 className="text-base font-unbounded font-bold text-primary">
        Paradise Gateway: Labuan Bajo
      </h3>
      <p className="text-xs font-bold font-albertSans text-secondary mb-6">
        Organized by Pandooin
      </p>

      <p className="text-xs text-secondary font-albertSans leading-[14.4px]">
        Start from
      </p>
      <p className="text-lg leading-[22.32px] text-secondary mb-6 font-medium font-unbounded">
        IDR 5,200,000
      </p>

      <button className="w-[116px] h-[54px] center-container rounded-full border-2 border-secondary text-secondary font-albertSans font-bold hover:bg-gold hover:border-gold hover:text-white transition-all-300">
        See Details
      </button>
    </div>
  );
};

export default OtherCard;
