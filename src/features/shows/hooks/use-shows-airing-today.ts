import { showQueriesFactory } from "@/features/shows/queries";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useShowsAiringToday() {
    const { data: showsAiringTodayQuery } = useSuspenseQuery(
        showQueriesFactory.getAiringTodayQueryOptions(),
    );

    if (!showsAiringTodayQuery.success) {
        console.error("[SHOWS_AIRING_TODAY_QUERY]:", showsAiringTodayQuery.error);

        return {
            error: showsAiringTodayQuery.error,
        };
    }

    return {
        data: showsAiringTodayQuery.data,
    };
}
