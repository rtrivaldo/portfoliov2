export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex gap-2 sm:gap-4">
                <h1 className="text-xl md:text-3xl font-semibold text-cyan-400 opacity-0 animate-fade-up-then-out">Rivaldo Tandoko</h1>
                <h1 className="text-xl md:text-3xl font-semibold opacity-0 animate-fade-up-then-out delay-500">Portfolio</h1>
            </div>
        </div>
    );
}
