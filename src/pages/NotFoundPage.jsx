import React from 'react';
import { Home, ArrowLeft, RefreshCw, Zap } from 'lucide-react';

export default function NotFoundComic() {
    return (
        <div className="min-h-screen bg-amber-300 flex items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-yellow-400 selection:text-black">

            {/* Background Halftone Pattern / Comic Rays */}
            <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#000 2px, transparent 2px)',
                    backgroundSize: '16px 16px'
                }}
            />

            {/* Decorative Floating Action Onomatopoeias */}
            <div className="absolute top-8 left-8 -rotate-12 hidden md:block">
                <span className="bg-red-500 text-white border-4 border-black px-4 py-1 text-2xl font-black italic shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider">
                    BOOM!
                </span>
            </div>

            <div className="absolute bottom-12 right-12 rotate-15 hidden md:block">
                <span className="bg-cyan-400 text-black border-4 border-black px-4 py-1 text-2xl font-black italic shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider">
                    CRASH!
                </span>
            </div>

            {/* Main Comic Panel Card */}
            <main className="relative z-10 w-full max-w-xl bg-white border-4 border-black rounded-3xl p-6 sm:p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">

                {/* Panel Header Header / Issue Tag */}
                <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-6">
                    <div className="flex items-center gap-2 bg-yellow-400 border-2 border-black px-3 py-1 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <Zap className="w-4 h-4 fill-current text-black" /> ISSUE #404
                    </div>
                    <span className="font-extrabold text-sm uppercase tracking-wider text-gray-800">
                        PAGE NOT FOUND
                    </span>
                </div>

                {/* Hero Graphic & Speech Bubble */}
                <div className="relative my-6 flex flex-col items-center">

                    {/* Speech Bubble */}
                    <div className="relative bg-white border-4 border-black rounded-2xl p-4 mb-6 text-center max-w-xs shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                        <p className="font-extrabold text-gray-900 text-base sm:text-lg leading-snug uppercase">
                            "dingin tetapi tidak kejam"
                        </p>
                        {/* Speech Bubble Arrow */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-12 border-l-transparent border-r-12 border-r-transparent border-t-16 border-t-black">
                            <div className="absolute -top-5 -left-2.25 w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-12 border-t-white" />
                        </div>
                    </div>

                    {/* Explosive 404 Badge */}
                    <div className="relative group cursor-pointer my-2">
                        <div className="absolute inset-0 bg-red-500 rounded-full border-4 border-black scale-110 rotate-6 group-hover:rotate-12 transition-transform shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]" />
                        <div className="relative bg-yellow-400 border-4 border-black px-8 py-3 rounded-full -rotate-3 group-hover:rotate-0 transition-transform">
                            <h1 className="text-6xl sm:text-7xl font-black tracking-tighter text-black italic drop-shadow-[2px_2px_0px_#fff]">
                                404!
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Message Description */}
                <p className="text-center font-bold text-gray-800 text-sm sm:text-base mt-4 mb-8 leading-relaxed">
                    The link you followed might be broken, or the page may have been vanquished by evil forces.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={() => window.history.back()}
                        className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-black font-extrabold border-3 border-black py-3 px-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 transition-all"
                    >
                        <ArrowLeft className="w-5 h-5 stroke-3" />
                        RETREAT!
                    </button>

                    <a
                        href="/"
                        className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-extrabold border-3 border-black py-3 px-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 transition-all"
                    >
                        <Home className="w-5 h-5 stroke-3" />
                        BASE HQ
                    </a>
                </div>

                {/* Footer/Help Link */}
                <div className="mt-8 text-center border-t-2 border-dashed border-black pt-4">
                    <button
                        onClick={() => window.location.reload()}
                        className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-gray-700 hover:text-black hover:underline"
                    >
                        <RefreshCw className="w-3.5 h-3.5" /> Retry Connection
                    </button>
                </div>

            </main>
        </div>
    );
}