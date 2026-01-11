import { movieDbClient } from "@/server/api";
import { TMDBError } from "@/server/errors";
import { toTaggedError } from "@/server/utils";
import { createServerFn } from "@tanstack/react-start";

export const getMoviesPlayingNow = createServerFn({ method: "GET" }).handler(async () => {
    try {
        const moviesPlayingNow = await movieDbClient.movieNowPlaying();

        return {
            success: true,
            data: moviesPlayingNow,
        };
    } catch (error) {
        return {
            success: false,
            error: toTaggedError(new TMDBError("Unable to retrieve movies playing now", error)),
        };
    }
});
