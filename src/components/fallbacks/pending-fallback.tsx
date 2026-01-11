import { Icons } from "@/components/shared/icons";

export function PendingFallback() {
    return (
        <div className="col-span-full flex w-full items-center justify-center py-10 h-[215px]">
            <Icons.loader className="size-6" />
        </div>
    );
}
