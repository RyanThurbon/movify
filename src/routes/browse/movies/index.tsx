import { BrowseMovies } from "@/features/movies/components/browse";
import { DiscoverMoviesFilters } from "@/features/movies/server/functions";
import { createFileRoute } from "@tanstack/react-router";
import z from "zod";

const browseMoviesSchema = z.custom<DiscoverMoviesFilters>().optional();

export const Route = createFileRoute("/browse/movies/")({
    validateSearch: (params) => {
        const parsed = browseMoviesSchema.safeParse(params);

        if (!parsed.success) {
            return browseMoviesSchema.parse({});
        }

        return parsed.data;
    },
    component: BrowseMoviesPage,
});

function BrowseMoviesPage() {
    return <BrowseMovies />;
}
