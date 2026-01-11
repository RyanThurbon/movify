import { showQueriesFactory } from "@/features/shows/queries";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useShowsOnAir() {
    const { data: showsOnAirQuery } = useSuspenseQuery(showQueriesFactory.getOnAirQueryOptions());

    if (!showsOnAirQuery.success) {
        console.error("[SHOWS_ON_AIR_QUERY]:", showsOnAirQuery.error);

        return {
            error: showsOnAirQuery.error,
        };
    }

    return {
        data: showsOnAirQuery.data,
    };
}
