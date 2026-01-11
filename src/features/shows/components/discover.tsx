import { PendingBoundary } from "@/components/boundaries/pending-boundary";
import { NoResultsFallback } from "@/components/fallbacks/no-results-fallback";
import { DisplayGridLayout } from "@/components/layouts/display-grid-layout";
import { MediaPoster } from "@/components/shared/media-poster";
import { SectionHeading } from "@/components/shared/section-heading";
import { ViewMoreButton } from "@/components/shared/view-more-button";
import { useShowsDiscover } from "@/features/shows/hooks";

export function ShowsDiscoverList() {
    const { data: discoveryList, error } = useShowsDiscover();

    if (error) {
        return <NoResultsFallback message={error.message} />;
    }

    if (!discoveryList.results) {
        return <NoResultsFallback message="No shows available to discover." />;
    }

    return discoveryList.results.map((show) => <MediaPoster key={show.id} media={show} />);
}

export function ShowsDiscover() {
    return (
        <section id="shows-discover">
            <div className="flex flex-col gap-y-4">
                <SectionHeading heading="Find your next binge" />
                <DisplayGridLayout>
                    <PendingBoundary>
                        <ShowsDiscoverList />
                        <ViewMoreButton route="/browse/shows" />
                    </PendingBoundary>
                </DisplayGridLayout>
            </div>
        </section>
    );
}
