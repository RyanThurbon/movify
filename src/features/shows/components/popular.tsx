import { PendingBoundary } from "@/components/boundaries/pending-boundary";
import { CarouselSection } from "@/components/carousels/carousel-section";
import { MediaCarousel } from "@/components/carousels/media-carousel";
import { NoResultsFallback } from "@/components/fallbacks/no-results-fallback";
import { useShowsPopular } from "@/features/shows/hooks/";

function ShowsPopularCarousel() {
    const { data: popularShows, error } = useShowsPopular();

    if (error) {
        return <NoResultsFallback message={error.message} />;
    }

    return <MediaCarousel media={popularShows.results} fallback="No current popular shows." />;
}

export function ShowsPopular() {
    return (
        <section id="shows-popular">
            <div className="flex flex-col gap-y-4">
                <CarouselSection heading="Trending with Viewers">
                    <PendingBoundary>
                        <ShowsPopularCarousel />
                    </PendingBoundary>
                </CarouselSection>
            </div>
        </section>
    );
}
