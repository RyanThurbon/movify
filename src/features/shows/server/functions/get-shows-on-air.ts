import { movieDbClient } from "@/server/api";
import { TMDBError } from "@/server/errors";
import { toTaggedError } from "@/server/utils";
import { createServerFn } from "@tanstack/react-start";

export const getShowsOnAir = createServerFn({ method: "GET" }).handler(async () => {
    try {
        const showsOnAir = await movieDbClient.tvOnTheAir();

        return {
            success: true,
            data: showsOnAir,
        };
    } catch (error) {
        return {
            success: false,
            error: toTaggedError(new TMDBError("Unable to retrieve shows on air", error)),
        };
    }
});
