import { movieDbClient } from "@/server/api";
import { TMDBError } from "@/server/errors";
import { toTaggedError } from "@/server/utils";
import { createServerFn } from "@tanstack/react-start";

export const getShowsAiringToday = createServerFn({ method: "GET" }).handler(async () => {
    try {
        const showAiringToday = await movieDbClient.tvAiringToday();

        return {
            success: true,
            data: showAiringToday,
        };
    } catch (error) {
        return {
            success: false,
            error: toTaggedError(new TMDBError("Unable to retrieve shows airing today", error)),
        };
    }
});
