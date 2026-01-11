import { showQueriesFactory } from "@/features/shows/queries";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useShowsDiscover() {
    const { data: discoverShowsQuery } = useSuspenseQuery(
        showQueriesFactory.getDiscoverQueryOptions(),
    );

    if (!discoverShowsQuery.success) {
        console.error("[DISCOVER_SHOWS_QUERY]:", discoverShowsQuery.error);

        return {
            error: discoverShowsQuery.error,
        };
    }

    return {
        data: discoverShowsQuery.data,
    };
}
