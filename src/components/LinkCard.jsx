import React from "react";
import { BookOpen, ExternalLink } from "lucide-react";

export default function LinkCard({
    url = "https://google.com",
    text = "Click here to view the module...",
    icon: Icon = BookOpen
}) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="select-none block w-full mx-auto no-underline touch-manipulation group"
        >
            <div className="flex flex-row items-center justify-between text-black font-semibold bg-yellow-100 border border-yellow-400 p-3 rounded-2xl transition-all duration-200 hover:border-yellow-500 hover:shadow-md">

                {/* Left Side: Icon + Text */}
                <div className="flex flex-row items-center gap-3 min-w-0">
                    <div className="p-2 bg-yellow-300 rounded-xl text-yellow-800 transition-transform shrink-0">
                        <Icon className="w-5 h-5 stroke-[2.5]" />
                    </div>

                    <span className="text-sm sm:text-base font-bold text-yellow-800">
                        {text}
                    </span>
                </div>

                {/* Right Side: Arrow Badge */}
                <div className="flex items-center gap-1 bg-yellow-300 text-yellow-800 px-3 py-1.5 rounded-xl text-xs font-extrabold uppercase shrink-0 ml-2">
                    <span>Open</span>
                    <ExternalLink className="w-3 h-3 stroke-[2.5]" />
                </div>

            </div>
        </a>
    );
}