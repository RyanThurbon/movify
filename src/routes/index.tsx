import {
    MoviesComingSoon,
    MoviesDiscover,
    MoviesPlayingNow,
    MoviesPopular,
    MoviesTrending,
} from "@/features/movies/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: HomePage,
});

function HomePage() {
    return (
        <>
            <MoviesTrending />
            <MoviesComingSoon />
            <MoviesPopular />
            <MoviesPlayingNow />
            <MoviesDiscover />
        </>
    );
}
