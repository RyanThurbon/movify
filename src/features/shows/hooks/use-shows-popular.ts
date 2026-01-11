import { showQueriesFactory } from "@/features/shows/queries";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useShowsPopular() {
    const { data: popularShowsQuery } = useSuspenseQuery(
        showQueriesFactory.getPopularQueryOptions(),
    );

    if (!popularShowsQuery.success) {
        console.error("[POPULAR_SHOWS_QUERY]:", popularShowsQuery.error);

        return {
            error: popularShowsQuery.error,
        };
    }

    return {
        data: popularShowsQuery.data,
    };
}
