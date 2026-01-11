import type { Nav } from "@/components/shared/navbar";
import { buttonVariants } from "@/components/ui/button.tsx";
import { Link } from "@tanstack/react-router";

export function DesktopNavbar({ nav }: { nav: Nav[] }) {
    return (
        <div className="hidden md:flex">
            {nav.map((item, index) => (
                <Link
                    to={item.to}
                    key={index}
                    className={buttonVariants({ variant: "ghost" })}
                    aria-label={item.label}
                    activeProps={{
                        className: "text-primary",
                    }}
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );
}
