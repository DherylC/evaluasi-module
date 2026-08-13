import React, { useState, useEffect } from "react";

// Your published CSV URL
const PUBLISHED_CSV_URL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vRdjhHy_iHdgQzPCgI89JXcrzIq4KmTqqrQJcDApucEBMxjnIYBWp6IIpe-Gl-nV3ngrCPclD5e9c6i/pub?gid=1636893193&single=true&output=csv`;

// Helper function to safely parse CSV lines with quoted commas
function parseCSVLine(line) {
    const result = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === "," && !inQuotes) {
            result.push(current.trim().replace(/^"|"$/g, ""));
            current = "";
        } else {
            current += char;
        }
    }
    result.push(current.trim().replace(/^"|"$/g, ""));
    return result;
}

export default function CountdownPage() {
    const [config, setConfig] = useState({
        targetDate: "2026-08-15T10:00:00",
        event: "BRIEFING DAY PPIF 2026",
        doneMessage: "DONE!",
        hide: false,
        hideWhenDue: false,
        note: "",
        noteAfterDone: "",
        loading: true,
    });

    useEffect(() => {
        async function fetchSheetConfig() {
            try {
                const res = await fetch(PUBLISHED_CSV_URL);
                const csvText = await res.text();

                const lines = csvText.trim().split("\n");
                if (lines.length > 1) {
                    // Use smart CSV line parser for Row 2
                    const row = parseCSVLine(lines[1]);

                    const day = row[0] || "2026-08-15";
                    const time = row[1] || "10:00:00";
                    const event = row[2] || "BRIEFING DAY PPIF 2026";
                    const doneMessage = row[3] || "DONE!";
                    const hide = row[4]?.toLowerCase() === "true";
                    const hideWhenDue = row[5]?.toLowerCase() === "true";
                    const note = row[6] || "";
                    const noteAfterDone = row[7] || "";

                    setConfig({
                        targetDate: `${day}T${time}`,
                        event,
                        doneMessage,
                        hide,
                        hideWhenDue,
                        note,
                        noteAfterDone,
                        loading: false,
                    });
                }
            } catch (err) {
                console.error("Failed to load Google Sheet config:", err);
                setConfig((prev) => ({ ...prev, loading: false }));
            }
        }

        fetchSheetConfig();
    }, []);

    if (config.loading) return null;

    return (
        <Countdown
            targetDate={config.targetDate}
            event={config.event}
            doneMessage={config.doneMessage}
            hide={config.hide}
            hideWhenDue={config.hideWhenDue}
            note={config.note}
            noteAfterDone={config.noteAfterDone}
        />
    );
}

// Inner Countdown Renderer
function Countdown({
    targetDate,
    event,
    doneMessage,
    hide = false,
    hideWhenDue = false,
    note = "",
    noteAfterDone = "",
}) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [prevTime, setPrevTime] = useState(timeLeft);

    function calculateTimeLeft() {
        const difference = +new Date(targetDate) - +new Date();
        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
            isFinished: false,
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((current) => {
                setPrevTime(current);
                return calculateTimeLeft();
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (hide) return null;

    // STATE 1: COUNTDOWN FINISHED (Matches your reference image)
    if (timeLeft.isFinished) {
        if (hideWhenDue) return null;

        return (
            <div className="animate-fade-in relative w-full max-w-xl mx-auto my-8 p-6 sm:p-8 bg-red-500 border-3 sm:border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center flex flex-col items-center justify-center gap-3 select-none">
                {/* Top Badge */}
                <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-block bg-yellow-400 text-black text-xs sm:text-sm font-black uppercase tracking-wider px-4 py-1 sm:py-1.5 border-2 sm:border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-1 whitespace-nowrap">
                        {event}
                    </span>
                </div>

                {/* Main Message */}
                <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-wider mt-1">
                    {doneMessage}
                </h2>

                {/* Note After Done Pill Badge */}
                {noteAfterDone && (
                    <div className="inline-block bg-white text-black text-xs sm:text-sm font-bold px-4 py-1.5 rounded-2xl border-2 sm:border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] max-w-full wrap-break-word">
                        {noteAfterDone}
                    </div>
                )}
            </div>
        );
    }

    // STATE 2: ACTIVE COUNTDOWN
    return (
        <div className="animate-fade-in relative w-full max-w-2xl mx-auto my-8 p-5 pt-7 sm:p-6 sm:pt-8 bg-yellow-300 border-3 sm:border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black select-none">
            {/* Top Badge */}
            <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 z-10">
                <span className="inline-block bg-red-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider px-4 py-1 sm:py-1.5 border-2 sm:border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-1 whitespace-nowrap">
                    {event}
                </span>
            </div>

            {/* Grid Units */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
                <TimeUnit label="Days" value={timeLeft.days} prevValue={prevTime.days} delay={100} />
                <TimeUnit label="Hours" value={timeLeft.hours} prevValue={prevTime.hours} delay={150} />
                <TimeUnit label="Mins" value={timeLeft.minutes} prevValue={prevTime.minutes} delay={200} />
                <TimeUnit label="Secs" value={timeLeft.seconds} prevValue={prevTime.seconds} delay={250} />
            </div>

            {/* Active Note Pill Badge */}
            {note && (
                <div className="mt-5 text-center">
                    <span className="inline-block bg-white text-black text-xs sm:text-sm font-bold px-4 py-1.5 rounded-2xl border-2 sm:border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] max-w-full wrap-break-word">
                        {note}
                    </span>
                </div>
            )}
        </div>
    );
}

// Sub-component for individual sliding unit
function TimeUnit({ label, value, prevValue, delay }) {
    const isChanging = value !== prevValue;

    return (
        <div className="animate-fade-in flex flex-col items-center" style={{ animationDelay: `${delay}ms` }}>
            <div className="relative w-full aspect-square sm:aspect-auto sm:h-24 bg-white border-3 sm:border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden">
                <span
                    key={value}
                    className={`font-mono text-2xl sm:text-4xl md:text-5xl font-black text-black transition-all duration-300 transform ${isChanging ? "animate-slide-down" : ""
                        }`}
                >
                    {String(value).padStart(2, "0")}
                </span>
            </div>

            <span className="mt-2 text-[10px] sm:text-xs font-black uppercase bg-black text-white px-2 py-0.5 rounded-md border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                {label}
            </span>
        </div>
    );
}