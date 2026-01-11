import { DesktopNavbar } from "@/components/shared/navbar/desktop.tsx";
import { MobileNavbar } from "@/components/shared/navbar/mobile.tsx";
import { Link, type LinkOptions } from "@tanstack/react-router";
import { PopcornIcon } from "lucide-react";

export interface Nav {
    label: string;
    to: LinkOptions["to"];
}

export const nav: Nav[] = [
    {
        label: "Movies",
        to: "/",
    },
    {
        label: "Shows",
        to: "/shows",
    },
    {
        label: "Browse Movies",
        to: "/browse/movies",
    },
    {
        label: "Browse Shows",
        to: "/browse/shows",
    },
];

export function Navbar() {
    return (
        <section id="navbar">
            <header className="w-full py-4 border-b border-primary flex justify-between">
                <Link to="/" className="flex items-center gap-x-2">
                    <PopcornIcon className="size-6 text-primary" />
                    <h1 className="lexend-bold text-lg">Movify</h1>
                </Link>
                <nav className="flex items-center gap-x-4">
                    <DesktopNavbar nav={nav} />
                    <MobileNavbar nav={nav} />
                </nav>
            </header>
        </section>
    );
}
