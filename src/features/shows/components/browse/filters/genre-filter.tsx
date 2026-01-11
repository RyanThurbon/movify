import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { SHOW_GENRES } from "@/lib/constants";
import { useNavigate, useSearch } from "@tanstack/react-router";

export function ShowGenreFilter() {
    const currentSearch = useSearch({ from: "/browse/shows/" });
    const navigate = useNavigate();

    return (
        <Select
            value={currentSearch?.with_genres ?? ""}
            onValueChange={async (value) => {
                await navigate({
                    to: "/browse/shows",
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
                {SHOW_GENRES.map((genre) => (
                    <SelectItem key={genre.value} value={genre.value.toString()}>
                        {genre.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
