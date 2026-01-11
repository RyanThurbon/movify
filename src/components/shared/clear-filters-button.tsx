import { Button } from "@/components/ui/button";
import { type LinkOptions, useNavigate } from "@tanstack/react-router";
import { XIcon } from "lucide-react";

export function ClearFiltersButton({ route }: { route: LinkOptions["to"] }) {
    const navigate = useNavigate();

    return (
        <Button
            onClick={async () => {
                await navigate({
                    to: route as string,
                    search: {},
                });
            }}
            size="sm"
            variant="ghost"
            className="text-muted-foreground flex items-center gap-x-2"
        >
            Clear
            <XIcon className="size-4" />
        </Button>
    );
}
