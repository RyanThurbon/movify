import { BrowseShows } from "@/features/shows/components/browse";
import { DiscoverShowsFilters } from "@/features/shows/server/functions";
import { createFileRoute } from "@tanstack/react-router";
import z from "zod";

const browseShowsSchema = z.custom<DiscoverShowsFilters>().optional();

export const Route = createFileRoute("/browse/shows/")({
    validateSearch: (params) => {
        const parsed = browseShowsSchema.safeParse(params);

        if (!parsed.success) {
            return browseShowsSchema.parse({});
        }

        return parsed.data;
    },
    component: BrowseShowsPage,
});

function BrowseShowsPage() {
    return <BrowseShows />;
}
