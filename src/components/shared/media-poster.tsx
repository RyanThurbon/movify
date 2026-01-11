import { useImageOnLoad } from "@/hooks/use-image-onload";
import { createImageURL, isMovieResult } from "@/lib/helpers";
import dayjs from "dayjs";
import type { MovieResult, TvResult } from "moviedb-promise";

export function MediaPoster({ media }: { media: MovieResult | TvResult }) {
    const { handleImageOnLoad, styles } = useImageOnLoad();

    const mediaTitle = isMovieResult(media) ? media.title : media.name;
    const mediaReleaseDate = isMovieResult(media) ? media.release_date : media.first_air_date;
    const mediaPoster = createImageURL("w154", media.poster_path);
    const mediaRating = media.vote_average ? Math.floor(media.vote_average) : undefined;
    const mediaType = isMovieResult(media) ? "movie" : "tv";

    return (
        <div className="relative group">
            <a
                href={`https://www.themoviedb.org/${mediaType}/${media.id}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${mediaTitle} on TMDb`}
                className="block"
            >
                <img
                    src={mediaPoster}
                    alt={mediaTitle}
                    className="rounded-sm aspect-2/3 transition-transform duration-200 group-hover:scale-[1.02]"
                    onLoad={handleImageOnLoad}
                    decoding="async"
                    loading="lazy"
                    style={{ ...styles.fadeIn }}
                />

                <div className="absolute bottom-0 left-0 w-full h-[85%] bg-linear-to-t from-black to-transparent rounded-b-sm group-hover:opacity-0 transition-opacity duration-200 pointer-events-none" />

                <div className="absolute bottom-0 left-0 p-1 text-sm flex gap-y-1 flex-col w-full lexend-bold group-hover:opacity-0 transition-opacity duration-200">
                    <h3 className="line-clamp-1">{mediaTitle}</h3>
                    <div className="flex items-center text-muted-foreground justify-between text-xs">
                        <span>{dayjs(mediaReleaseDate).year() || "N/A"}</span>
                        <span>{mediaRating || "?"}/10</span>
                    </div>
                </div>
            </a>
        </div>
    );
}
