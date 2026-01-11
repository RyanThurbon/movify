import { movieQueriesFactory } from "@/features/movies/queries";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useMoviesPopular() {
    const { data: popularMoviesQuery } = useSuspenseQuery(
        movieQueriesFactory.getPopularQueryOptions(),
    );

    if (!popularMoviesQuery.success) {
        console.error("[POPULAR_MOVIES_QUERY]:", popularMoviesQuery.error);

        return {
            error: popularMoviesQuery.error,
        };
    }

    return {
        data: popularMoviesQuery.data,
    };
}
