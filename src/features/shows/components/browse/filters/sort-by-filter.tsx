import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { SORT_BY } from "@/lib/constants";
import { useNavigate, useSearch } from "@tanstack/react-router";
import type { DiscoverTvRequest } from "moviedb-promise";

export function ShowSortByFilter() {
    const currentSearch = useSearch({ from: "/browse/shows/" });
    const navigate = useNavigate();

    return (
        <Select
            value={currentSearch?.sort_by ?? ""}
            onValueChange={async (value) => {
                await navigate({
                    to: "/browse/shows",
                    search: {
                        ...currentSearch,
                        sort_by: value as DiscoverTvRequest["sort_by"],
                    },
                });
            }}
        >
            <SelectTrigger className="w-fit">
                <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
                {SORT_BY.map((sort) => (
                    <SelectItem key={sort.value} value={sort.value}>
                        {sort.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
