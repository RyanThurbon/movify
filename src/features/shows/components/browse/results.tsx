import { NoResultsFallback } from "@/components/fallbacks/no-results-fallback";
import { PendingFallback } from "@/components/fallbacks/pending-fallback";
import { PendingGridFallback } from "@/components/fallbacks/pending-grid-fallback";
import { DisplayGridLayout } from "@/components/layouts/display-grid-layout";
import { ClearFiltersButton } from "@/components/shared/clear-filters-button";
import { MediaPoster } from "@/components/shared/media-poster";
import { SectionHeading } from "@/components/shared/section-heading";
import { ShowGenreFilter, ShowSortByFilter } from "@/features/shows/components/browse";
import { showQueriesFactory } from "@/features/shows/queries";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearch } from "@tanstack/react-router";

function BrowseShowsResults() {
    const currentSearch = useSearch({ from: "/browse/shows/" });

    const { data, isFetching, isPending, hasNextPage, fetchNextPage } = useInfiniteQuery(
        showQueriesFactory.getInfiniteDiscoverQueryOptions(currentSearch),
    );

    const loadMoreRef = useIntersectionObserver(() => {
        if (hasNextPage && !isFetching) {
            fetchNextPage();
        }
    }, !!hasNextPage);

    if (isPending) {
        return <PendingGridFallback />;
    }

    const allShows = data?.pages.flatMap((page) => page.data?.results || []) || [];

    if (allShows.length === 0) {
        return <NoResultsFallback message="No results found." />;
    }

    return (
        <div className="flex flex-col gap-y-4">
            <DisplayGridLayout>
                {allShows.map((show, index) => (
                    <MediaPoster key={`${show.id}-${index}`} media={show} />
                ))}
            </DisplayGridLayout>

            {hasNextPage && (
                <div ref={loadMoreRef} className="h-10 w-full flex items-center justify-center">
                    {isFetching && <PendingFallback />}
                </div>
            )}
        </div>
    );
}

export function BrowseShows() {
    return (
        <section id="browse-shows">
            <div className="flex flex-col gap-y-4">
                <SectionHeading heading="Browse your favourite shows" />
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                        <ShowGenreFilter />
                        <ShowSortByFilter />
                    </div>
                    <ClearFiltersButton route="/browse/shows" />
                </div>
                <BrowseShowsResults />
            </div>
        </section>
    );
}
