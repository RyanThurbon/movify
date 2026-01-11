import { PendingGridFallback } from "@/components/fallbacks/pending-grid-fallback";
import { type PropsWithChildren, Suspense } from "react";

export function PendingGridBoundary({ children }: PropsWithChildren) {
    return <Suspense fallback={<PendingGridFallback />}>{children}</Suspense>;
}
