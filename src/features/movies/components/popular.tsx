import { PendingBoundary } from "@/components/boundaries/pending-boundary";
import { CarouselSection } from "@/components/carousels/carousel-section";
import { MediaCarousel } from "@/components/carousels/media-carousel";
import { NoResultsFallback } from "@/components/fallbacks/no-results-fallback";
import { useMoviesPopular } from "@/features/movies/hooks";

function MoviesPopularCarousel() {
    const { data: upcomingMovies, error } = useMoviesPopular();

    if (error) {
        return <NoResultsFallback message={error.message} />;
    }

    return <MediaCarousel media={upcomingMovies.results} fallback="No current popular movies." />;
}

export function MoviesPopular() {
    return (
        <section id="movies-popular">
            <div className="flex flex-col gap-y-4">
                <CarouselSection heading="Trending with Viewers">
                    <PendingBoundary>
                        <MoviesPopularCarousel />
                    </PendingBoundary>
                </CarouselSection>
            </div>
        </section>
    );
}
