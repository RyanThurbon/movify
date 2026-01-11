import { movieQueriesFactory } from "@/features/movies/queries";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useMoviesDiscover() {
    const { data: discoverMoviesQuery } = useSuspenseQuery(
        movieQueriesFactory.getDiscoverQueryOptions(),
    );

    if (!discoverMoviesQuery.success) {
        console.error("[DISCOVER_MOVIES_QUERY]:", discoverMoviesQuery.error);

        return {
            error: discoverMoviesQuery.error,
        };
    }

    return {
        data: discoverMoviesQuery.data,
    };
}
