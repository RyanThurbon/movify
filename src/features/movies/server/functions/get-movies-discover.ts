import { movieDbClient } from "@/server/api";
import { TMDBError } from "@/server/errors";
import { toTaggedError } from "@/server/utils";
import { createServerFn } from "@tanstack/react-start";
import type { DiscoverMovieRequest } from "moviedb-promise";
import z from "zod";

const moviesDiscoverFiltersSchema = z.custom<DiscoverMovieRequest>().optional();

export const getMoviesDiscover = createServerFn({ method: "GET" })
    .inputValidator(moviesDiscoverFiltersSchema)
    .handler(async ({ data }) => {
        try {
            const discoveryList = await movieDbClient.discoverMovie(data);

            return {
                success: true,
                data: discoveryList,
            };
        } catch (error) {
            return {
                success: false,
                error: toTaggedError(new TMDBError("Unable to retrieve movies discovery", error)),
            };
        }
    });

export type DiscoverMoviesFilters = z.infer<typeof moviesDiscoverFiltersSchema>;
