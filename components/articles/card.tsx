import Image from "next/image";

interface CardProps {
  data: IArticle;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <article className="w-full h-full flex flex-col relative">
      <a
        className="h-full"
        href={`https://pandooin.com/blog/article/${data.slug}`}
        target="_blank"
      >
        <div className="w-full h-full flex-grow aspect-[199/171] overflow-hidden transition-all-300 grayscale hover:grayscale-0 md:aspect-[256/347]">
          <Image
            className="w-full h-full object-cover object-center"
            src={data.featured_image}
            width={536}
            height={649}
            alt="Article 1"
          />
        </div>
        <div className="w-full absolute bottom-0 left-0 p-6 bg-primary">
          <p className="text-white line-clamp-2 text-base font-bold font-albertSans leading-[19.2px]">
            {data.title}
          </p>
        </div>
      </a>
    </article>
  );
};

export default Card;
