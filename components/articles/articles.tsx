"use client";

import { useQuery } from "@tanstack/react-query";
import Banner from "./banner";
import { getArticles } from "@/api";
import Card from "./card";
import { SectionObserver } from "../shared";

const Articles = () => {
  const { data } = useQuery({
    queryKey: ["articles"],
    queryFn: () => getArticles(),
  });

  const articles = data?.data ?? [];

  return (
    <section id="article" className="py-6 px-4 xl:px-0 lg:py-[54px]">
      <SectionObserver hash="#article" />
      <div className="wrapper">
        <Banner />

        <h2 className="text-[22px] text-secondary font-bold leading-[27.28px] font-unbounded mb-2 md:text-4xl md:leading-[44.64px]">
          Articles
        </h2>
        <p className="leading-[19.2px] font-albertSans text-secondary mb-6 md:text-2xl md:leading-[28.8px]">
          Our curated writings, offering something for every reader.
        </p>

        <div className="grid md:grid-cols-4 gap-6 items-stretch">
          {articles.map((article, index) => (
            <div
              key={index}
              className={`${index === 0 && "md:col-span-2 md:row-span-2"}`}
            >
              <Card key={article.id} data={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
