import type { MovieResult, TvResult } from "moviedb-promise";

export const images = {
    base_url: "http://image.tmdb.org/t/p/",
    secure_base_url: "https://image.tmdb.org/t/p/",
    backdrop_sizes: ["w300", "w780", "w1280", "original"] as const,
    logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"] as const,
    poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"] as const,
    profile_sizes: ["w45", "w185", "h632", "original"] as const,
    still_sizes: ["w92", "w185", "w300", "original"] as const,
};

type ImageSize =
    | (typeof images)["logo_sizes"][number]
    | (typeof images)["backdrop_sizes"][number]
    | (typeof images)["profile_sizes"][number]
    | (typeof images)["still_sizes"][number]
    | (typeof images)["poster_sizes"][number];

export const createImageURL = (size: ImageSize, path: string | undefined) => {
    if (!path) {
        return undefined;
    }

    return `${images.secure_base_url}/${size}/${path}`;
};

export const isMovieResult = (item: MovieResult | TvResult): item is MovieResult => {
    return "title" in item;
};
