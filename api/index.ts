import fetcher from "@/lib/fetcher";

export const getItinerary = async () => {
  return fetcher<IResponse<IItinerary[]>>("/itinerary", undefined);
};

export const getArticles = async () => {
  return fetcher<IResponse<IArticle[]>>("article", { highlight: true });
};
