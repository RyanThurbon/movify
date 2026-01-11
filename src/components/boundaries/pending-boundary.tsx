import { PendingFallback } from "@/components/fallbacks/pending-fallback";
import { type PropsWithChildren, Suspense } from "react";

export function PendingBoundary({ children }: PropsWithChildren) {
    return <Suspense fallback={<PendingFallback />}>{children}</Suspense>;
}
