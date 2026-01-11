import { movieQueriesFactory } from "@/features/movies/queries";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useMoviesUpcoming() {
    const { data: upcomingMoviesQuery } = useSuspenseQuery(
        movieQueriesFactory.getUpcomingQueryOptions(),
    );

    if (!upcomingMoviesQuery.success) {
        console.error("[UPCOMING_MOVIES_QUERY]:", upcomingMoviesQuery.error);

        return {
            error: upcomingMoviesQuery.error,
        };
    }

    return {
        data: upcomingMoviesQuery.data,
    };
}
