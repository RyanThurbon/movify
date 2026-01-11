import type { PropsWithChildren } from "react";

export function DisplayGridLayout({ children }: PropsWithChildren) {
    return (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {children}
        </div>
    );
}
