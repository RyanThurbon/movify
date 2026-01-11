import { PendingBoundary } from "@/components/boundaries/pending-boundary";
import { CarouselSection } from "@/components/carousels/carousel-section";
import { MediaCarousel } from "@/components/carousels/media-carousel";
import { NoResultsFallback } from "@/components/fallbacks/no-results-fallback";
import { useMoviesUpcoming } from "@/features/movies/hooks";

function MoviesPlayingNowCarousel() {
    const { data: moviesPlayingNow, error } = useMoviesUpcoming();

    if (error) {
        return <NoResultsFallback message={error.message} />;
    }

    return (
        <MediaCarousel media={moviesPlayingNow.results} fallback="No movies currently in cinema." />
    );
}

export function MoviesPlayingNow() {
    return (
        <section id="movies-playing-now">
            <div className="flex flex-col gap-y-4">
                <CarouselSection heading="Now In Cinemas">
                    <PendingBoundary>
                        <MoviesPlayingNowCarousel />
                    </PendingBoundary>
                </CarouselSection>
            </div>
        </section>
    );
}
