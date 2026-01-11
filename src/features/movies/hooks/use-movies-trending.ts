import { movieQueriesFactory } from "@/features/movies/queries";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useMoviesTrending() {
    const { data: trendingMoviesQuery } = useSuspenseQuery(
        movieQueriesFactory.getTrendingQueryOptions(),
    );

    if (!trendingMoviesQuery.success) {
        console.error("[TRENDING_MOVIES_QUERY]:", trendingMoviesQuery.error);

        return {
            error: trendingMoviesQuery.error,
        };
    }

    return {
        data: trendingMoviesQuery.data,
    };
}
