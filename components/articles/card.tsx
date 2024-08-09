import { cn } from "@/lib/utils";
import Image from "next/image";

interface CardProps {
  className?: string;
}

const Card: React.FC<CardProps> = ({ className }) => {
  return (
    <article className={cn("w-full flex flex-col relative", className)}>
      <div className="w-full flex-grow aspect-[199/171] overflow-hidden transition-all-300 grayscale hover:grayscale-0 md:aspect-[256/347]">
        <Image
          className="w-full h-full object-cover object-center"
          src="/images/dummy-12.jpg"
          width={536}
          height={649}
          alt="Article 1"
        />
      </div>
      <div className="w-full absolute bottom-0 left-0 p-6 bg-primary">
        <p className="text-white line-clamp-2 text-base font-bold font-albertSans leading-[19.2px]">
          7 Best Places to Dive in Indonesia: From Bali to Wakatobi
        </p>
      </div>
    </article>
  );
};

export default Card;
