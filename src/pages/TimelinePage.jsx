import { useEffect, useState, useRef, useMemo } from "react";
import { Loader, Sparkles, MessageSquareWarning } from "lucide-react";
import { getTimelineEvents } from "../apis/timelineApi";

// Helper to parse dates formatted as MM/DD/YYYY (American input from Sheet)
function parseEventDate(dateStr) {
    if (!dateStr) return new Date(0);

    const str = dateStr.trim();
    const parts = str.split("/");

    if (parts.length === 3) {
        const month = parseInt(parts[0], 10) - 1; // Month first
        const day = parseInt(parts[1], 10);       // Day second

        // Handle typos like "3/27/202 6" -> strip whitespace
        const year = parseInt(parts[2].replace(/\s+/g, ""), 10);

        return new Date(year, month, day);
    }

    const parsed = new Date(str);
    return isNaN(parsed.getTime()) ? new Date(0) : parsed;
}

// Optional helper to format raw date text into a clean localized Asian string
function formatDisplayDate(dateStr) {
    const d = parseEventDate(dateStr);
    if (isNaN(d.getTime()) || d.getTime() === 0) return dateStr;

    // Formats into local day/month/year format (e.g., 23/07/2026 or 23 Jul 2026)
    return d.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
}

export default function TimelinePage() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const activeCardRef = useRef(null);

    useEffect(() => {
        document.title = "Timeline Module";

        async function fetchTimeline() {
            setLoading(true);
            const data = await getTimelineEvents();
            setEvents(data);
            setLoading(false);
        }

        fetchTimeline();
    }, []);

    // Find the index of the event closest to current date (today)
    const closestIndex = useMemo(() => {
        if (!events.length) return -1;

        const now = new Date().getTime();
        let minDiff = Infinity;
        let closestIdx = -1;

        events.forEach((item, idx) => {
            const eventTime = parseEventDate(item.date).getTime();
            const diff = eventTime - now;

            // Only consider events that are today or in the future
            if (diff >= 0 && diff < minDiff) {
                minDiff = diff;
                closestIdx = idx;
            }
        });

        // Fallback: If all events are in the past, default to the last event (or 0)
        if (closestIdx === -1) {
            closestIdx = events.length - 1;
        }

        return closestIdx;
    }, [events]);

    // Auto scroll to the closest card once data is rendered
    useEffect(() => {
        if (!loading && activeCardRef.current) {
            const timer = setTimeout(() => {
                activeCardRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }, 150);

            return () => clearTimeout(timer);
        }
    }, [loading, closestIndex]);

    return (
        <div className="select-none min-h-screen bg-amber-300 flex items-center justify-center px-4 pt-4 pb-24 relative overflow-hidden font-sans selection:bg-yellow-400 selection:text-black">

            <div
                className="absolute inset-0 opacity-15 pointer-events-none animate-halftone"
                style={{
                    backgroundImage: 'radial-gradient(#000 2px, transparent 2px)',
                    backgroundSize: '16px 16px'
                }}
            />

            <main className="mt-20 relative z-10 w-full max-w-2xl bg-white border-4 border-black rounded-3xl p-2 py-8 sm:p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">

                <div className="mb-8 border-b-2 animate-fade-in border-black border-dashed pb-8 flex flex-col items-center w-full justify-center gap-2 px-3 py-1 font-black text-xs tracking-widest" style={{ animationDelay: "0ms" }}>
                    <div className="inline-flex items-center gap-2 bg-red-600 text-yellow-300 border-3 border-black px-4 py-2 font-black text-xl sm:text-2xl md:text-4xl uppercase tracking-tight shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                        <span className="w-3 h-3 rounded-full bg-yellow-400 animate-ping" />
                        <span>TIMELINE PPIF 2026</span>
                    </div>
                    <span className="font-bold tracking-normal mt-2 text-sm">*akan diisi dokumentasi juga, stay tuned!</span>

                </div>

                <div className="w-full mx-auto mt-12">

                    <div className="flex items-center gap-4 mb-12 mx-4 bg-red-500 text-white border-2 border-black px-3 py-4 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <MessageSquareWarning className="w-4 h-4" /> Timeline bisa berubah sewaktu-waktu, informasi terbaru disampaikan di grup WA.
                    </div>

                    {/* Loading State */}
                    {loading && (
                        <div className="flex flex-row items-center text-center text-gray-500 border border-gray-300 bg-gray-200 p-2 rounded-2xl animate-pulse">
                            <Loader className="w-8 h-8 p-2 animate-spin" /> Timeline Loading...
                        </div>
                    )}

                    {/* Timeline Container */}
                    {!loading && (
                        <div className="relative pl-6">

                            {/* Vertical Timeline Line */}
                            <div className="absolute left-8.5 top-2 bottom-2 border-l-2 border-black border-dashed" />

                            <div className="flex flex-col gap-24">
                                {events.map((item, index) => {
                                    const isCurrent = index === closestIndex;

                                    return (
                                        <div
                                            key={index}
                                            ref={isCurrent ? activeCardRef : null}
                                            className="relative left-6 pl-4 animate-fade-in [animation-fill-mode:both]"
                                        >
                                            {/* Event Title Banner */}
                                            <div className={`relative -left-12 font-extrabold border-2 border-black rounded-2xl px-4 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between z-10 mb-3 transition-transform 
                                                ${isCurrent
                                                    ? "pl-4 bg-red-500 text-white"
                                                    : "pl-4 sm:pl-12 bg-yellow-300 text-black "
                                                }`}>

                                                <span className="text-base tracking-wide flex items-center gap-2">
                                                    {isCurrent && (
                                                        <span className="flex flex-row items-center gap-2 text-[10px] bg-black text-white px-2 py-1 rounded-full uppercase tracking-widest font-black">
                                                            <div className="w-2 h-2 bg-red-500 animate-ping rounded-full" />NEXT
                                                        </span>
                                                    )}
                                                    {item.event}

                                                </span>
                                                <span className="text-xs text-right font-bold">
                                                    {formatDisplayDate(item.date)}
                                                </span>
                                            </div>

                                            {/* Content Card Box */}
                                            {item.desc !== "TBA" && (
                                                <div className={`bg-white relative ml-12 -left-12 border-2 border-black rounded-2xl px-6 py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center gap-3
                                                ${isCurrent ? " border-red-500" : ""}`}>

                                                    {/* Description */}
                                                    {item.desc && (
                                                        <div className="flex w-full text-sm font-medium text-start text-gray-800">
                                                            {item.desc}
                                                        </div>
                                                    )}

                                                    {/* Picture Box 
                                                <div className="w-full bg-[radial-gradient(#a3e635_1px,transparent_1px)] bg-size-[16px_16px] bg-lime-300 border-2 border-black rounded-2xl min-h-40 flex items-center justify-center overflow-hidden">
                                                    {item.picture ? (
                                                        <img
                                                            src={`/images/${item.picture}`}
                                                            alt={item.event}
                                                            draggable="false"
                                                            className="w-full h-full object-cover [user-drag:none] [-webkit-user-drag:none]"
                                                            onError={(e) => {
                                                                e.target.onerror = null;
                                                                e.target.style.display = 'none';
                                                            }}
                                                        />
                                                    ) : (
                                                        <span className="text-gray-700 font-medium text-sm">
                                                            picture here
                                                        </span>
                                                    )}
                                                </div>
                                                */}
                                                </div>
                                            )}


                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    )}

                </div>
            </main>

        </div>
    );
}