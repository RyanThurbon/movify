import {
    type DiscoverShowsFilters,
    getShowsAiringToday,
    getShowsDiscover,
    getShowsOnAir,
    getShowsPopular,
    getShowsTrending,
} from "@/features/shows/server/functions";
import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";

export const showQueriesFactory = {
    getDiscoverQueryOptions: (filters?: DiscoverShowsFilters) =>
        queryOptions({
            queryKey: ["shows", "discover", filters],
            queryFn: () => getShowsDiscover({ data: filters }),
        }),

    getAiringTodayQueryOptions: () =>
        queryOptions({
            queryKey: ["shows", "airing-today"],
            queryFn: () => getShowsAiringToday(),
        }),
    getPopularQueryOptions: () =>
        queryOptions({
            queryKey: ["shows", "popular"],
            queryFn: () => getShowsPopular(),
        }),
    getTrendingQueryOptions: () =>
        queryOptions({
            queryKey: ["shows", "trending"],
            queryFn: () => getShowsTrending(),
        }),
    getOnAirQueryOptions: () =>
        queryOptions({
            queryKey: ["shows", "on-air"],
            queryFn: () => getShowsOnAir(),
        }),
    getInfiniteDiscoverQueryOptions: (filters?: DiscoverShowsFilters) =>
        infiniteQueryOptions({
            queryKey: ["shows", "discover-infinite", filters],
            queryFn: ({ pageParam = 2 }) =>
                getShowsDiscover({
                    data: {
                        ...filters,
                        page: pageParam,
                    },
                }),
            initialPageParam: 2,
            getNextPageParam: (data) => {
                if (!data.success) {
                    return undefined;
                }

                if (data.data.page && data.data.total_pages) {
                    if (data.data.page < data.data.total_pages) {
                        return data.data.page + 1;
                    }
                }
            },
        }),
};
