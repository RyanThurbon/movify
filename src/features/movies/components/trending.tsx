import { PendingBoundary } from "@/components/boundaries/pending-boundary";
import { CarouselSection } from "@/components/carousels/carousel-section";
import { MediaCarousel } from "@/components/carousels/media-carousel";
import { NoResultsFallback } from "@/components/fallbacks/no-results-fallback";
import { useMoviesTrending } from "@/features/movies/hooks";
import { MovieResult } from "moviedb-promise";

function MoviesTrendingCarousel() {
    const { data: trendingMovies, error } = useMoviesTrending();

    if (error) {
        return <NoResultsFallback message={error.message} />;
    }

    return (
        <MediaCarousel
            media={trendingMovies.results as MovieResult[]}
            fallback="No movies trending this week."
        />
    );
}

export function MoviesTrending() {
    return (
        <section id="movies-trending">
            <div className="flex flex-col gap-y-4">
                <CarouselSection heading="Hot This Week">
                    <PendingBoundary>
                        <MoviesTrendingCarousel />
                    </PendingBoundary>
                </CarouselSection>
            </div>
        </section>
    );
}
