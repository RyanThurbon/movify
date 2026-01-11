import { movieDbClient } from "@/server/api";
import { TMDBError } from "@/server/errors";
import { toTaggedError } from "@/server/utils";
import { createServerFn } from "@tanstack/react-start";

export const getMoviesUpcoming = createServerFn({ method: "GET" }).handler(async () => {
    try {
        const upcomingMovies = await movieDbClient.upcomingMovies({});

        return {
            success: true,
            data: upcomingMovies,
        };
    } catch (error) {
        return {
            success: false,
            error: toTaggedError(new TMDBError("Unable to retrieve upcoming movies", error)),
        };
    }
});
