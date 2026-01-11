import { Card, CardContent } from "@/components/ui/card.tsx";

export function NoResultsFallback({ message }: { message: string }) {
    return (
        <Card className="py-4 flex items-center justify-center">
            <CardContent>{message}</CardContent>
        </Card>
    );
}
