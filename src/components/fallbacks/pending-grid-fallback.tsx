import { MediaPosterFallback } from "@/components/fallbacks/media-poster-fallback";
import { DisplayGridLayout } from "@/components/layouts/display-grid-layout";

export function PendingGridFallback({ count = 20 }: { count?: number }) {
    return (
        <DisplayGridLayout>
            {Array.from({ length: count }).map((_, index) => (
                <MediaPosterFallback key={index} />
            ))}
        </DisplayGridLayout>
    );
}
