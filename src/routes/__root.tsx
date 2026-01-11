import { PageLayout } from "@/components/layouts/page-layout";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import type { QueryClient } from "@tanstack/react-query";
import { HeadContent, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import appCss from "../styles.css?url";

interface AppContext {
    queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<AppContext>()({
    head: () => ({
        meta: [
            {
                charSet: "utf-8",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                title: "Movify",
            },
        ],
        links: [
            {
                rel: "stylesheet",
                href: appCss,
            },
            {
                rel: "preconnect",
                href: "https://fonts.googleapis.com",
            },
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossOrigin: "anonymous",
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap",
            },
            { rel: "dns-prefetch", href: "https://api.themoviedb.org" },
        ],
    }),
    shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body>
                <PageLayout>
                    <div className="flex flex-col gap-y-10 flex-1">
                        <Navbar />
                        <div className="flex flex-col gap-y-2">{children}</div>
                    </div>
                    <Footer />
                </PageLayout>
                <Scripts />
            </body>
        </html>
    );
}
