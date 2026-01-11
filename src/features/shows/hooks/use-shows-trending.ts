import { showQueriesFactory } from "@/features/shows/queries";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useShowsTrending() {
    const { data: trendingShowsQuery } = useSuspenseQuery(
        showQueriesFactory.getTrendingQueryOptions(),
    );

    if (!trendingShowsQuery.success) {
        console.error("[TRENDING_SHOWS_QUERY]:", trendingShowsQuery.error);

        return {
            error: trendingShowsQuery.error,
        };
    }

    return {
        data: trendingShowsQuery.data,
    };
}
