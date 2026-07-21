import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SECTIONS = [
    { id: "story-act-1", label: "Act 1" },
    { id: "story-prolog", label: "Prolog" },
    { id: "quiz-prolog", label: "Quiz Prolog" },
    { id: "story-1", label: "Story 1" },
    { id: "quiz-1", label: "Quiz 1" },
    { id: "story-2", label: "Story 2" },
    { id: "quiz-2", label: "Quiz 2" },
    { id: "story-3", label: "Story 3" },
    { id: "quiz-3", label: "Quiz 3" },
    { id: "story-bf", label: "Story Post 3" },
    { id: "story-end", label: "Epilog" }, // Fixed duplicate ID
];

export default function Navigator() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollToSection = (index) => {
        if (index < 0 || index >= SECTIONS.length) return;

        const targetId = SECTIONS[index].id;
        const element = document.getElementById(targetId);

        if (element) {
            setCurrentIndex(index);
            element.scrollIntoView({ behavior: "smooth", block: "start" });

            // Auto-scroll the horizontal pill menu into view as well
            const pillElement = document.getElementById(`nav-pill-${targetId}`);
            if (pillElement) {
                pillElement.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
            }
        }
    };

    return (
        <div className="fixed bottom-3 left-0 right-0 z-50 px-3 pointer-events-none">
            <div className="max-w-md mx-auto bg-yellow-400 border-3 border-black p-2 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 pointer-events-auto">

                {/* Previous Button */}
                <button
                    onClick={() => scrollToSection(currentIndex - 1)}
                    disabled={currentIndex === 0}
                    className="p-2 bg-white border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-black transition-all active:translate-y-0.5 shrink-0"
                >
                    <ChevronLeft className="w-4 h-4 stroke-3" />
                </button>

                {/* Horizontally Scrollable Pills Container */}
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

                {/* Next Button */}
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