import { useEffect } from "react";
import { SunIcon, Astroid, Tornado } from "lucide-react";

export default function RegulationsPage() {

    useEffect(() => {
        document.title = "REGULASI PPIF 2026";
    }, []);

    return (
        <div className="min-h-screen bg-amber-300 flex items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-yellow-400 selection:text-black">

            {/* Background Halftone Pattern / Comic Rays */}
            <div
                className="absolute inset-0 opacity-15 pointer-events-none animate-halftone"
                style={{
                    backgroundImage: 'radial-gradient(#000 2px, transparent 2px)',
                    backgroundSize: '16px 16px'
                }}
            />

            {/* Main Comic Panel Card */}
            <main className="mt-20 relative z-10 w-full max-w-2xl bg-white border-4 border-black rounded-3xl p-6 sm:p-10 mb-20 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-8 border-b-2 border-black border-dashed pb-8 flex flex-row items-center w-full justify-center gap-2 px-3 py-1 font-black text-xs uppercase tracking-widest animate-fade-in">
                    <Tornado className="w-12 h-12 fill-current text-black" />
                    <span className="font-black ml-4 text-2xl">Flow Briefing Day</span>
                </div>

                <div className="flex flex-col gap-12 animate-fade-in" style={{ animationDelay: "100ms" }}>

                </div>

            </main>
        </div>
    );
}