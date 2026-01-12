import { ONE_HOUR } from "@/lib/constants";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function getContext() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 3 * ONE_HOUR,
                refetchOnMount: false,
                refetchOnReconnect: true,
                refetchOnWindowFocus: false,
            },
        },
    });
    return {
        queryClient,
    };
}

export function Provider({
    children,
    queryClient,
}: {
    children: React.ReactNode;
    queryClient: QueryClient;
}) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
