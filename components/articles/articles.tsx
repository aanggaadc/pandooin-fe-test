"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { getArticles } from "@/api";
import Card from "./card";

const Articles = () => {
  const { data } = useQuery({
    queryKey: ["articles"],
    queryFn: () => getArticles(),
  });

  const articles = data?.data ?? [];
  const highlightArticle = articles[0];
  const restArticle = articles.slice(1);

  return (
    <section id="article" className="py-6 px-4 lg:px-0 lg:py-[54px]">
      <div className="wrapper">
        <Image
          className="w-full md:hidden mb-[54px]"
          src="/images/banner-mobile.jpg"
          alt="banner"
          width={398}
          height={168}
        />

        <Image
          className="w-full hidden md:block mb-[72px]"
          src="/images/banner-desktop.jpg"
          alt="banner"
          width={1096}
          height={102}
        />

        <h2 className="text-[22px] text-secondary font-bold leading-[27.28px] font-unbounded mb-2 md:text-4xl md:leading-[44.64px]">
          Articles
        </h2>
        <p className="leading-[19.2px] font-albertSans text-secondary mb-6 md:text-2xl md:leading-[28.8px]">
          Our curated writings, offering something for every reader.
        </p>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="md:w-6/12">
            <Card className="h-full" data={highlightArticle} />
          </div>
          <div className="flex flex-wrap flex-col gap-6 md:w-6/12 md:flex-row ">
            {restArticle.map((article) => (
              <Card
                key={article.id}
                className="md:w-[calc((100%_/_2)_-_24px_+_(24px_/_2))]"
                data={article}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
