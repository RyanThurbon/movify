import { movieDbClient } from "@/server/api";
import { TMDBError } from "@/server/errors";
import { toTaggedError } from "@/server/utils";
import { createServerFn } from "@tanstack/react-start";

export const getShowsTrending = createServerFn({ method: "GET" }).handler(async () => {
    try {
        const trendingShows = await movieDbClient.trending({
            media_type: "tv",
            time_window: "week",
        });

        return {
            success: true,
            data: trendingShows,
        };
    } catch (error) {
        return {
            success: false,
            error: toTaggedError(new TMDBError("Unable to retrieve trending shows", error)),
        };
    }
});
