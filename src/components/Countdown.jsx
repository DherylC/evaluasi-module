import React, { useState, useEffect } from "react";

// Target date prop default: change this to your desired future date/time
export default function Countdown({ targetDate = "2026-08-06T21:00:00", event = "EVENT", doneMessage = "DONE!", hide = false }) {
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

    if (timeLeft.isFinished) {
        return (
            <div className={`relative w-full max-w-xl mx-auto my-6 p-6 bg-red-500 border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center ${hide ? 'hidden' : ''}`}>
                <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-block bg-yellow-400 text-black text-xs sm:text-sm font-black uppercase tracking-wider px-4 py-1 sm:py-1.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-1 whitespace-nowrap">
                        {event}
                    </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wider">
                    {doneMessage}
                </h2>
            </div>
        );
    }

    return (
        <div className={`animate-fade-in relative w-full max-w-2xl mx-auto my-8 p-5 pt-7 sm:p-6 sm:pt-8 bg-yellow-300 border-3 sm:border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black select-none ${hide ? 'hidden' : ''}`}>
            {/* Top Center Straddling Event Badge */}
            <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 z-10">
                <span className="inline-block bg-red-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider px-4 py-1 sm:py-1.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-1 whitespace-nowrap">
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
        </div>
    );
}

// Sub-component for individual sliding unit
function TimeUnit({ label, value, prevValue, delay }) {
    const isChanging = value !== prevValue;

    return (
        <div className="animate-fade-in flex flex-col items-center" style={{ animationDelay: `${delay}ms` }}>
            {/* Number Card Container */}
            <div className="relative w-full aspect-square sm:aspect-auto sm:h-24 bg-white border-3 sm:border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden">

                {/* Animated Sliding Digit */}
                <span
                    key={value}
                    className={`font-mono text-2xl sm:text-4xl md:text-5xl font-black text-black transition-all duration-300 transform ${isChanging ? "animate-slide-down" : ""
                        }`}
                >
                    {String(value).padStart(2, "0")}
                </span>

            </div>

            {/* Label Tag */}
            <span className="mt-2 text-[10px] sm:text-xs font-black uppercase bg-black text-white px-2 py-0.5 rounded-md border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                {label}
            </span>
        </div>
    );
}