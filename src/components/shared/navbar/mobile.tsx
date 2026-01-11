import type { Nav } from "@/components/shared/navbar/index.tsx";
import { Button, buttonVariants } from "@/components/ui/button.tsx";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet.tsx";
import { cn } from "@/lib/utils.ts";
import { Link } from "@tanstack/react-router";
import { MenuIcon, PopcornIcon } from "lucide-react";

export function MobileNavbar({ nav }: { nav: Nav[] }) {
    return (
        <Sheet>
            <SheetTrigger asChild className="block md:hidden px-2" aria-label="Open menu">
                <Button size="icon" variant="ghost">
                    <MenuIcon className="size-5" />
                </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="py-2">
                <SheetHeader>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <SheetDescription className="flex items-center gap-x-2 uppercase">
                        <PopcornIcon className="size-4 text-primary" />
                        Movify
                    </SheetDescription>
                </SheetHeader>
                {nav.map((item, index) => (
                    <Link
                        key={index}
                        to={item.to}
                        className={cn(buttonVariants({ variant: "ghost" }), "inline-block")}
                        aria-label={item.label}
                        activeProps={{
                            className: "text-primary",
                        }}
                    >
                        {item.label}
                    </Link>
                ))}
            </SheetContent>
        </Sheet>
    );
}
