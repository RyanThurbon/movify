export function MediaPosterFallback() {
    return (
        <div className="relative group animate-pulse">
            <div className="rounded-sm aspect-2/3" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-black to-transparent rounded-b-sm group-hover:opacity-0 transition-opacity duration-200 pointer-events-none" />
        </div>
    );
}
