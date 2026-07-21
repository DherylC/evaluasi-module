import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function HomePage() {

    useEffect(() => {
        document.title = "ModuleHub | PPIF 2026";
    }, []);

    return (
        <div className="relative min-h-screen bg-red-50 px-4 py-6 sm:py-8 pt-24 font-sans overflow-hidden">
            {/* Background Halftone Dot Pattern */}
            <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#000 2px, transparent 2px)",
                    backgroundSize: "16px 16px"
                }}
            />

            <div className="pt-20 relative z-10 mx-auto max-w-xl">

                {/* Hero Title Banner */}
                <div className="relative mb-8 text-center">
                    <span className="inline-block -rotate-2 bg-yellow-400 px-4 py-1 text-xs font-black uppercase text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-2">
                        PPIF 2026
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-black italic uppercase text-red-600 tracking-tight drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                        MODULE HUB
                    </h1>
                </div>

                {/* Comic Grid Layout */}
                <div className="flex flex-col gap-4 sm:gap-5">

                    {/* TOP ROW: 2 Columns */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <ComicCard
                            title="List Evaluasi"
                            badgeBg="bg-yellow-400"
                            link="/all-evaluations"
                            rotate="-rotate-1"
                            desc="Master evaluation codes catalog"
                        />
                        <ComicCard
                            title="Evaluasi Rangkaian"
                            badge="!!!"
                            badgeBg="bg-red-500 text-white"
                            link="/evaluations"
                            rotate="rotate-1"
                            desc="Simulations & partner evaluation"
                        />
                    </div>

                    {/* MIDDLE ROW: 3 Columns */}
                    <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                        <ComicCard
                            title="Aktivitas"
                            badgeBg="bg-cyan-400"
                            link="https://drive.google.com/drive/folders/18lObZbLYvojYfhG0n_QgVvaa5S7tLnzk?usp=drive_link"
                            rotate="-rotate-1"
                            isSmall
                        />
                        <ComicCard
                            title="Cheat Sheet"
                            badgeBg="bg-emerald-400"
                            link="https://docs.google.com/document/d/16WrTbQGQPQHfcAVkq1UWdYHwYvEisOx5lBRav8PKUvo/"
                            rotate="rotate-1"
                            isSmall
                        />
                        <ComicCard
                            title="Dokumentasi"
                            badgeBg="bg-orange-400"
                            link="https://drive.google.com/drive/folders/1i1YFCatTLwU204fpFWFw8vIN0MsfkJkW?usp=drive_link"
                            rotate="-rotate-2"
                            isSmall
                        />
                    </div>

                    {/* BOTTOM ROW: Full Width */}
                    <ComicCard
                        title="Storyline"
                        badge="IMPORTANT!"
                        badgeBg="bg-purple-500 text-white"
                        link="/not-found"
                        rotate="rotate-1"
                        isWide
                        desc="Current module roadmap & mentee progress line"
                    />

                </div>
            </div>
        </div>
    );
}

// Reusable Comic Panel Component
function ComicCard({ title, badge, badgeBg, link, rotate = "", isSmall = false, isWide = false, desc }) {
    const content = (
        <div
            className={`group relative flex flex-col justify-between rounded-2xl bg-white p-4 border-3 sm:border-4 border-black 
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] 
        transition-all duration-150 transform hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5
        ${rotate} ${isSmall ? "min-h-27.5 sm:min-h-32.5 p-3" : isWide ? "min-h-30" : "min-h-35 sm:min-h-40"}`}
        >
            {/* Card Internal Halftone Dot Pattern Background */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none rounded-xl"
                style={{
                    backgroundImage: "radial-gradient(circle, #000 25%, transparent 25%)",
                    backgroundSize: "8px 8px"
                }}
            />

            {/* Comic Badge */}
            <div className="flex justify-between items-start mb-2">
                <h2 className={`font-black uppercase tracking-tight text-black leading-tight group-hover:text-red-600 transition-colors ${isSmall ? "text-xs sm:text-sm" : "text-base sm:text-lg"
                    }`}>
                    {title}
                </h2>
                {badge && (
                    <span className={`shrink-0 text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 border-2 border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] -rotate-3 ${badgeBg}`}>
                        {badge}
                    </span>
                )}
            </div>

            {/* Description or Action Arrow */}
            <div className="flex justify-between items-end mt-auto">
                {desc ? (
                    <p className="text-[10px] sm:text-xs text-gray-500 font-bold line-clamp-2">{desc}</p>
                ) : (
                    <span className="text-[10px] text-gray-400 font-extrabold italic">Module section</span>
                )}
                <span className="text-xs sm:text-sm font-black text-black group-hover:translate-x-1 transition-transform ml-1">
                    →
                </span>
            </div>
        </div>
    );

    return link ? <Link to={link}>{content}</Link> : <div className="cursor-pointer">{content}</div>;
}