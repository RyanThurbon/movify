import { Button } from "@/components/ui/button";
import { type LinkOptions, useNavigate } from "@tanstack/react-router";
import { ArrowRightIcon } from "lucide-react";

export function ViewMoreButton({ route }: { route: LinkOptions["to"] }) {
    const navigate = useNavigate();

    return (
        <Button
            className="flex items-center gap-x-2 justify-center h-full flex-wrap"
            variant="secondary"
            onClick={async () => {
                await navigate({
                    to: route as string,
                });
            }}
        >
            View more
            <ArrowRightIcon className="size-4 hidden md:block" />
        </Button>
    );
}
