import { movieDbClient } from "@/server/api";
import { TMDBError } from "@/server/errors";
import { toTaggedError } from "@/server/utils";
import { createServerFn } from "@tanstack/react-start";

export const getMoviesPopular = createServerFn({ method: "GET" }).handler(async () => {
    try {
        const popularMovies = await movieDbClient.moviePopular();

        return {
            success: true,
            data: popularMovies,
        };
    } catch (error) {
        return {
            success: false,
            error: toTaggedError(new TMDBError("Unable to retrieve popular movies", error)),
        };
    }
});
