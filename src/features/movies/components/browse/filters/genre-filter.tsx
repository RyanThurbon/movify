import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { MOVIE_GENRES } from "@/lib/constants";
import { useNavigate, useSearch } from "@tanstack/react-router";

export function MovieGenreFilter() {
    const currentSearch = useSearch({ from: "/browse/movies/" });
    const navigate = useNavigate();

    return (
        <Select
            value={currentSearch?.with_genres ?? ""}
            onValueChange={async (value) => {
                await navigate({
                    to: "/browse/movies",
                    search: {
                        ...currentSearch,
                        with_genres: value,
                    },
                });
            }}
        >
            <SelectTrigger className="w-fit">
                <SelectValue placeholder="Genre" />
            </SelectTrigger>
            <SelectContent>
                {MOVIE_GENRES.map((genre) => (
                    <SelectItem key={genre.value} value={genre.value.toString()}>
                        {genre.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
