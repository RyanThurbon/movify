import { movieDbClient } from "@/server/api";
import { TMDBError } from "@/server/errors";
import { toTaggedError } from "@/server/utils";
import { createServerFn } from "@tanstack/react-start";
import { DiscoverTvRequest } from "moviedb-promise";
import z from "zod";

const discoverShowsFiltersSchema = z.custom<DiscoverTvRequest>().optional();

export const getShowsDiscover = createServerFn({ method: "GET" })
    .inputValidator(discoverShowsFiltersSchema)
    .handler(async ({ data }) => {
        try {
            const discoveryList = await movieDbClient.discoverTv(data);

            return {
                success: true,
                data: discoveryList,
            };
        } catch (error) {
            return {
                success: false,
                error: toTaggedError(new TMDBError("Unable to retrieve shows discovery", error)),
            };
        }
    });

export type DiscoverShowsFilters = z.infer<typeof discoverShowsFiltersSchema>;
