import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Matches exact IDs from StorylinePage.jsx
const SECTIONS = [
    { id: "story-act-1", label: "Act 1" },
    { id: "story-prolog", label: "Prolog" },
    { id: "quiz-prolog", label: "Quiz Prolog" },
    { id: "story-1", label: "Chapter 1" },
    { id: "quiz-1", label: "Quiz 1" },
    { id: "story-2", label: "Chapter 2" },
    { id: "quiz-2", label: "Quiz 2" },
    { id: "story-3", label: "Chapter 3" },
    { id: "quiz-3", label: "Quiz 3" },
    { id: "story-bf", label: "Post Ch 3" },
    { id: "story-end", label: "Epilog" },
];

export default function MobileHorizontalNav() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isButtonNavigating = useRef(false);

    // 1. Sync active tab on scroll
    useEffect(() => {
        let scrollTimeout;

        const handleScroll = () => {
            if (isButtonNavigating.current) return;

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const scrollPosition = window.scrollY + 120; // Accounts for header offset

                let activeIdx = 0;
                for (let i = 0; i < SECTIONS.length; i++) {
                    const el = document.getElementById(SECTIONS[i].id);
                    if (el) {
                        const top = el.offsetTop;
                        if (scrollPosition >= top) {
                            activeIdx = i;
                        }
                    }
                }

                setCurrentIndex(activeIdx);

                // Scroll current active pill into center view
                const pill = document.getElementById(`nav-pill-${SECTIONS[activeIdx].id}`);
                if (pill) {
                    pill.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                }
            }, 80);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    // 2. Direct click handler for arrows & pills
    const scrollToSection = (targetIndex) => {
        if (targetIndex < 0 || targetIndex >= SECTIONS.length) return;

        // Immediately reflect state change
        setCurrentIndex(targetIndex);
        isButtonNavigating.current = true;

        const targetId = SECTIONS[targetIndex].id;
        const element = document.getElementById(targetId);

        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        const pill = document.getElementById(`nav-pill-${targetId}`);
        if (pill) {
            pill.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }

        // Release scroll lock after animation completes
        setTimeout(() => {
            isButtonNavigating.current = false;
        }, 800);
    };

    return (
        <div className="select-none fixed bottom-3 left-0 right-0 z-50 px-3 pointer-events-none">
            <div className="max-w-md mx-auto bg-yellow-400 border-3 border-black p-2 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 pointer-events-auto">

                {/* Left Arrow */}
                <button
                    onClick={() => scrollToSection(currentIndex - 1)}
                    disabled={currentIndex === 0}
                    className="p-2 bg-white border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-black transition-all active:translate-y-0.5 shrink-0"
                >
                    <ChevronLeft className="w-4 h-4 stroke-3" />
                </button>

                {/* Scrollable Pills Menu */}
                <div className="flex-1 overflow-x-auto flex items-center gap-2 scrollbar-none py-1 px-1">
                    {SECTIONS.map((sec, idx) => {
                        const isActive = currentIndex === idx;
                        return (
                            <button
                                key={sec.id}
                                id={`nav-pill-${sec.id}`}
                                onClick={() => scrollToSection(idx)}
                                className={`whitespace-nowrap px-3 py-1 rounded-lg border-2 border-black font-black text-xs uppercase tracking-wider transition-all shrink-0 ${isActive
                                    ? "bg-black text-yellow-300 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] scale-105"
                                    : "bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-100"
                                    }`}
                            >
                                {sec.label}
                            </button>
                        );
                    })}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => scrollToSection(currentIndex + 1)}
                    disabled={currentIndex === SECTIONS.length - 1}
                    className="p-2 bg-white border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-black transition-all active:translate-y-0.5 shrink-0"
                >
                    <ChevronRight className="w-4 h-4 stroke-3" />
                </button>

            </div>
        </div>
    );
}