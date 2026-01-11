import {
    type DiscoverMoviesFilters,
    getMoviesDiscover,
    getMoviesPlayingNow,
    getMoviesPopular,
    getMoviesTrending,
    getMoviesUpcoming,
} from "@/features/movies/server/functions";
import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";

export const movieQueriesFactory = {
    getDiscoverQueryOptions: (filters?: DiscoverMoviesFilters) =>
        queryOptions({
            queryKey: ["movies", "discover", filters],
            queryFn: () => getMoviesDiscover({ data: filters }),
        }),
    getPlayingNowQueryOptions: () =>
        queryOptions({
            queryKey: ["movies", "playing-now"],
            queryFn: () => getMoviesPlayingNow(),
        }),
    getPopularQueryOptions: () =>
        queryOptions({
            queryKey: ["movies", "popular"],
            queryFn: () => getMoviesPopular(),
        }),
    getTrendingQueryOptions: () =>
        queryOptions({
            queryKey: ["movies", "trending"],
            queryFn: () => getMoviesTrending(),
        }),
    getUpcomingQueryOptions: () =>
        queryOptions({
            queryKey: ["movies", "upcoming"],
            queryFn: () => getMoviesUpcoming(),
        }),
    getInfiniteDisoverQueryOptions: (filters?: DiscoverMoviesFilters) =>
        infiniteQueryOptions({
            queryKey: ["movies", "discover-infinite", filters],
            queryFn: ({ pageParam = 2 }) =>
                getMoviesDiscover({
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
