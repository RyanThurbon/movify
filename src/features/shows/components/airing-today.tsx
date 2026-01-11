import { PendingBoundary } from "@/components/boundaries/pending-boundary";
import { CarouselSection } from "@/components/carousels/carousel-section";
import { MediaCarousel } from "@/components/carousels/media-carousel";
import { NoResultsFallback } from "@/components/fallbacks/no-results-fallback";
import { useShowsAiringToday } from "@/features/shows/hooks";

function ShowsAiringTodayCarousel() {
    const { data: showsAiringToday, error } = useShowsAiringToday();

    if (error) {
        return <NoResultsFallback message={error.message} />;
    }

    return <MediaCarousel media={showsAiringToday.results} fallback="No shows airing today." />;
}

export function ShowsAiringToday() {
    return (
        <section id="shows-airing-today">
            <div className="flex flex-col gap-y-4">
                <CarouselSection heading="Airing today">
                    <PendingBoundary>
                        <ShowsAiringTodayCarousel />
                    </PendingBoundary>
                </CarouselSection>
            </div>
        </section>
    );
}
