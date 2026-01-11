import type { PropsWithChildren } from "react";

export function PageLayout({ children }: PropsWithChildren) {
    return (
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <main className="flex flex-col min-h-screen">{children}</main>
        </div>
    );
}
