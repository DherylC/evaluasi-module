import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Megaphone, AlertCircle, LinkIcon } from "lucide-react";
import { getLatestNews } from "../apis/fetchnews";

export default function HomePage() {

    const [latestHeadline, setLatestHeadline] = useState("Loading latest news...");

    useEffect(() => {
        document.title = "ModuleHub | PPIF 2026";

        getLatestNews().then((data) => {
            if (data && data.length > 0) {
                const firstRow = data[0];
                // Checks for 'title' key or falls back to the very first column value in the row
                const headline = firstRow.title || Object.values(firstRow)[0] || "No news text";
                setLatestHeadline(headline);
            } else {
                setLatestHeadline("No headline available.");
            }
        });
    }, []);

    return (
        <div className="select-none relative min-h-screen bg-red-50 px-4 py-6 sm:py-8  font-sans overflow-hidden">

            {/* Moving Background Halftone Dot Pattern */}
            <div
                className="absolute inset-0 opacity-15 pointer-events-none animate-halftone"
                style={{
                    backgroundImage: "radial-gradient(#000 2px, transparent 2px)",
                    backgroundSize: "16px 16px"
                }}
            />

            <div className="pt-16 relative z-10 mx-auto max-w-xl flex flex-col gap-6">

                {/* Hero Title Banner */}
                <div className="relative text-center my-2">
                    <span className="inline-block -rotate-2 bg-yellow-400 px-4 py-1 text-xs font-black uppercase text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-2">
                        PPIF 2026
                    </span>
                    <h1 className="text-4xl -rotate-1 sm:text-5xl font-black italic uppercase text-red-500 tracking-tight drop-shadow-[2px_4px_0px_rgba(0,0,0,1)] [-webkit-text-stroke:2px_black]">
                        MODULE HUB
                    </h1>
                </div>

                {/* --- LATEST NEWS HEADLINE BANNER --- */}
                <div className="bg-yellow-300 border-3 border-black px-6 py-4 rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3 relative transition-transform">
                    {/* Comic Flash Tag - Positioned absolute to straddle the top border */}
                    <span className="absolute -top-4.5 left-4 shrink-0 bg-red-600 text-white font-black text-[10px] sm:text-xs uppercase px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 -rotate-2">
                        <Megaphone className="w-4 h-4 stroke-[2.5] animate-pulse" />
                        NEWS
                    </span>

                    {/* Headline Text / Marquee Message */}
                    <div className="flex-1 overflow-hidden">
                        <p className="font-extrabold text-black text-xs sm:text-sm">
                            {latestHeadline}
                        </p>
                    </div>
                </div>

                {/* Comic Grid Layout */}
                <div className="flex flex-col gap-4 sm:gap-5">

                    {/* TOP ROW: Full Width */}
                    <div className="animate-fade-in" style={{ animationDelay: '0ms' }}>
                        <ComicCard
                            title="Evaluasi"
                            badge="SIMUL 2 UPDATE!"
                            badgeBg="bg-emerald-500 text-white"
                            link="/evaluations"
                            rotate="rotate-1"
                            isWide
                            desc="Last Updated: Simulasi 2 (20 Juli 2026)"
                        />
                    </div>


                    {/* MIDDLE ROW: 3 Columns */}
                    <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                        <div className="animate-fade-in" style={{ animationDelay: '50ms' }}>

                            <ComicCard
                                title="Aktivitas"
                                badgeBg="bg-cyan-400"
                                link="https://drive.google.com/drive/folders/18lObZbLYvojYfhG0n_QgVvaa5S7tLnzk?usp=drive_link"
                                rotate="-rotate-1"
                                isCompact
                                desc={<LinkIcon size={16} />}
                            />
                        </div>

                        <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>

                            <ComicCard
                                title="Cheat Sheet"
                                badgeBg="bg-emerald-400"
                                link="https://docs.google.com/document/d/16WrTbQGQPQHfcAVkq1UWdYHwYvEisOx5lBRav8PKUvo/"
                                rotate="rotate-1"
                                isCompact
                                desc={<LinkIcon size={16} />}
                            />
                        </div>

                        {/*
                        <div className="animate-fade-in" style={{ animationDelay: '150ms' }}>

                            <ComicCard
                                title="Dokum"
                                badgeBg="bg-orange-400"
                                link="https://drive.google.com/drive/folders/1i1YFCatTLwU204fpFWFw8vIN0MsfkJkW?usp=drive_link"
                                rotate="-rotate-2"
                                isCompact
                                desc={<LinkIcon size={16} />}
                            />
                        </div>
                        */}

                        <div className="animate-fade-in" style={{ animationDelay: '150ms' }}>

                            <ComicCard
                                title="Timeline"
                                badge="NEW!"
                                badgeBg="bg-purple-500 text-white"
                                link="/timeline"
                                rotate="-rotate-1"
                                isCompact
                                desc="View Events"

                            />
                        </div>


                    </div>

                    {/* BOTTOM ROW: 2 Columns (Compact Height) */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">


                        <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>

                            <ComicCard
                                title="Flow Briefing Day"
                                badgeBg="bg-yellow-400"
                                link="/flow"
                                rotate="-rotate-1"
                                isCompact
                                desc="Zoom Meeting 101"
                            />
                        </div>


                        <div className="animate-fade-in" style={{ animationDelay: '250ms' }}>

                            <ComicCard
                                title="Storyline"
                                badge="UJIAN!"
                                badgeBg="bg-red-500 text-white"
                                link="/storyline"
                                rotate="rotate-1"
                                isCompact
                                desc="Jump through the Multiverse!"

                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

// Reusable Comic Panel Component
function ComicCard({
    title,
    badge,
    badgeBg,
    link,
    rotate = "",
    isSmall = false,
    isWide = false,
    isCompact = false, // Added Compact prop
    desc
}) {
    // Dynamic height class assignment
    const heightClass = isSmall
        ? "min-h-27.5 sm:min-h-32.5 p-3"
        : isCompact
            ? "min-h-24 sm:min-h-28 p-3"  // Shorter, sleek height for bottom row
            : isWide
                ? "min-h-30"
                : "min-h-35 sm:min-h-40";

    const content = (
        <div
            className={`group relative flex flex-col justify-between rounded-2xl bg-white p-4 border-3 sm:border-4 border-black 
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] 
        transition-all duration-150 transform hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5
        ${rotate} ${heightClass}`}
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
            <div className="flex justify-between items-start mb-1">
                <h2 className={`font-black uppercase tracking-tight text-black leading-tight group-hover:text-red-600 transition-colors ${isSmall || isCompact ? "text-xs sm:text-sm" : "text-base sm:text-lg"
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
                    <p className="text-[10px] sm:text-xs text-gray-500 font-bold line-clamp-1">{desc}</p>
                ) : (
                    <span className="text-[10px] text-gray-400 font-extrabold italic"></span>
                )}
                <span className="text-xs sm:text-sm font-black text-black group-hover:translate-x-1 transition-transform ml-1">
                    →
                </span>
            </div>
        </div>
    );

    return link ? <Link to={link}>{content}</Link> : <div className="cursor-pointer">{content}</div>;
}