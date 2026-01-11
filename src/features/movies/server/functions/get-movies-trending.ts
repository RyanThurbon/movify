import { movieDbClient } from "@/server/api";
import { TMDBError } from "@/server/errors";
import { toTaggedError } from "@/server/utils";
import { createServerFn } from "@tanstack/react-start";

export const getMoviesTrending = createServerFn({ method: "GET" }).handler(async () => {
    try {
        const trendingMovies = await movieDbClient.trending({
            media_type: "movie",
            time_window: "week",
        });

        return {
            success: true,
            data: trendingMovies,
        };
    } catch (error) {
        return {
            success: false,
            error: toTaggedError(new TMDBError("Unable to retrieve trending movies", error)),
        };
    }
});
