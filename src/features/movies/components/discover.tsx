import { PendingGridBoundary } from "@/components/boundaries/pending-grid-bounday";
import { NoResultsFallback } from "@/components/fallbacks/no-results-fallback";
import { DisplayGridLayout } from "@/components/layouts/display-grid-layout";
import { MediaPoster } from "@/components/shared/media-poster";
import { SectionHeading } from "@/components/shared/section-heading";
import { ViewMoreButton } from "@/components/shared/view-more-button";
import { useMoviesDiscover } from "@/features/movies/hooks";

function MoviesDiscoverList() {
    const { data: discoveryList, error } = useMoviesDiscover();

    if (error) {
        return <NoResultsFallback message={error.message} />;
    }

    if (!discoveryList.results) {
        return <NoResultsFallback message="No movies available to discover." />;
    }

    return discoveryList.results.map((movie) => <MediaPoster media={movie} key={movie.id} />);
}

export function MoviesDiscover() {
    return (
        <section id="movies-discover">
            <div className="flex flex-col gap-y-4">
                <SectionHeading heading="Find your next favourite" />
                <DisplayGridLayout>
                    <PendingGridBoundary>
                        <MoviesDiscoverList />
                        <ViewMoreButton route="/browse/movies" />
                    </PendingGridBoundary>
                </DisplayGridLayout>
            </div>
        </section>
    );
}
