import {
    ShowsAiringToday,
    ShowsDiscover,
    ShowsOnAir,
    ShowsPopular,
    ShowsTrending,
} from "@/features/shows/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shows/")({
    component: ShowsPage,
});

function ShowsPage() {
    return (
        <>
            <ShowsTrending />
            <ShowsOnAir />
            <ShowsPopular />
            <ShowsAiringToday />
            <ShowsDiscover />
        </>
    );
}
