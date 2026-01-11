import { PendingBoundary } from "@/components/boundaries/pending-boundary";
import { CarouselSection } from "@/components/carousels/carousel-section";
import { MediaCarousel } from "@/components/carousels/media-carousel";
import { NoResultsFallback } from "@/components/fallbacks/no-results-fallback";
import { useMoviesUpcoming } from "@/features/movies/hooks";

function MoviesComingSoonCarousel() {
    const { data: upcomingMovies, error } = useMoviesUpcoming();

    if (error) {
        return <NoResultsFallback message={error.message} />;
    }

    return <MediaCarousel media={upcomingMovies.results} fallback="No upcoming movies found." />;
}

export function MoviesComingSoon() {
    return (
        <section id="movies-coming-soon">
            <div className="flex flex-col gap-y-4">
                <CarouselSection heading="Upcoming Releases">
                    <PendingBoundary>
                        <MoviesComingSoonCarousel />
                    </PendingBoundary>
                </CarouselSection>
            </div>
        </section>
    );
}
