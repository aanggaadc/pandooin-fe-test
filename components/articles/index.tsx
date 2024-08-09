import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getArticles } from "@/api";
import Articles from "./articles";

export default async function PostsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Articles />
    </HydrationBoundary>
  );
}
