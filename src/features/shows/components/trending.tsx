import { PendingBoundary } from "@/components/boundaries/pending-boundary";
import { CarouselSection } from "@/components/carousels/carousel-section";
import { MediaCarousel } from "@/components/carousels/media-carousel";
import { NoResultsFallback } from "@/components/fallbacks/no-results-fallback";
import { useShowsTrending } from "@/features/shows/hooks";
import { TvResult } from "moviedb-promise";

function ShowsTrendingCarousel() {
    const { data: trendingShows, error } = useShowsTrending();

    if (error) {
        return <NoResultsFallback message={error.message} />;
    }

    return (
        <MediaCarousel
            media={trendingShows.results as TvResult[]}
            fallback="No shows trending this week."
        />
    );
}

export function ShowsTrending() {
    return (
        <section id="shows-trending">
            <div className="flex flex-col gap-y-4">
                <CarouselSection heading="Hot this week">
                    <PendingBoundary>
                        <ShowsTrendingCarousel />
                    </PendingBoundary>
                </CarouselSection>
            </div>
        </section>
    );
}
