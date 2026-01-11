import { PendingBoundary } from "@/components/boundaries/pending-boundary";
import { CarouselSection } from "@/components/carousels/carousel-section";
import { MediaCarousel } from "@/components/carousels/media-carousel";
import { NoResultsFallback } from "@/components/fallbacks/no-results-fallback";
import { useShowsOnAir } from "@/features/shows/hooks";

function ShowsOnAirCarousel() {
    const { data: showsOnAir, error } = useShowsOnAir();

    if (error) {
        return <NoResultsFallback message={error.message} />;
    }

    return <MediaCarousel media={showsOnAir.results} fallback="No shows currently on air." />;
}

export function ShowsOnAir() {
    return (
        <section id="shows-on-air">
            <div className="flex flex-col gap-y-4">
                <CarouselSection heading="On air within 7 days">
                    <PendingBoundary>
                        <ShowsOnAirCarousel />
                    </PendingBoundary>
                </CarouselSection>
            </div>
        </section>
    );
}
