import { cn } from "@/lib/utils";
import Image from "next/image";

interface CardProps {
  className?: string;
  image: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ className, image, title }) => {
  console.log(image);
  return (
    <article className={cn("w-full flex flex-col relative", className)}>
      <div className="w-full flex-grow aspect-[199/171] overflow-hidden transition-all-300 grayscale hover:grayscale-0 md:aspect-[256/347]">
        <Image
          className="w-full h-full object-cover object-center"
          src={image}
          width={536}
          height={649}
          alt="Article 1"
        />
      </div>
      <div className="w-full absolute bottom-0 left-0 p-6 bg-primary">
        <p className="text-white line-clamp-2 text-base font-bold font-albertSans leading-[19.2px]">
          {title}
        </p>
      </div>
    </article>
  );
};

export default Card;
