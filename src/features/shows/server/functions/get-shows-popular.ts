import { movieDbClient } from "@/server/api";
import { TMDBError } from "@/server/errors";
import { toTaggedError } from "@/server/utils";
import { createServerFn } from "@tanstack/react-start";

export const getShowsPopular = createServerFn({ method: "GET" }).handler(async () => {
    try {
        const popularShows = await movieDbClient.tvPopular();

        return {
            success: true,
            data: popularShows,
        };
    } catch (error) {
        return {
            success: false,
            error: toTaggedError(new TMDBError("Unable to retrieve popular shows", error)),
        };
    }
});
