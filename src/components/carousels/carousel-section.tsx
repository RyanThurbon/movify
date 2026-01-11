import { SectionHeading } from "@/components/shared/section-heading";
import { Carousel, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState, type PropsWithChildren } from "react";

function CarouselControls({ className }: { className?: string }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        mounted && (
            <div className={cn("flex items-center", className)}>
                <CarouselPrevious />
                <CarouselNext />
            </div>
        )
    );
}

interface CarouselSectionProps extends PropsWithChildren {
    heading: string;
}

export function CarouselSection(props: CarouselSectionProps) {
    return (
        <Carousel className="flex flex-col gap-y-4">
            <SectionHeading heading={props.heading} />
            {props.children}
            <CarouselControls className="flex justify-end" />
        </Carousel>
    );
}
