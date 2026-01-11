import { NoResultsFallback } from "@/components/fallbacks/no-results-fallback";
import { MediaPoster } from "@/components/shared/media-poster";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import type { MovieResult, TvResult } from "moviedb-promise";

interface MediaCarouselProps {
    media: MovieResult[] | TvResult[] | undefined;
    fallback: string;
}

export function MediaCarousel(props: MediaCarouselProps) {
    if (!props.media || props.media.length === 0) {
        return <NoResultsFallback message={props.fallback} />;
    }

    return (
        <CarouselContent>
            {props.media.map((media) => (
                <CarouselItem
                    key={media.id}
                    className="rounded-sm basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/7"
                >
                    <MediaPoster media={media} />
                </CarouselItem>
            ))}
        </CarouselContent>
    );
}
