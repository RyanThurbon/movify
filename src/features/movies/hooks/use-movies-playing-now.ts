import { movieQueriesFactory } from "@/features/movies/queries";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useMoviesPlayingNow() {
    const { data: moviesPlayingNowQuery } = useSuspenseQuery(
        movieQueriesFactory.getPlayingNowQueryOptions(),
    );

    if (!moviesPlayingNowQuery.success) {
        console.error("[MOVIES_PLAYING_NOW_QUERY]:", moviesPlayingNowQuery.error);

        return {
            error: moviesPlayingNowQuery.error,
        };
    }

    return {
        data: moviesPlayingNowQuery.data,
    };
}
