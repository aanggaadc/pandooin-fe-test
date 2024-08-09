import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getItinerary } from "@/api";
import Itineraries from "./itineraries";

export default async function PostsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["itinerary"],
    queryFn: getItinerary,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Itineraries />
    </HydrationBoundary>
  );
}
