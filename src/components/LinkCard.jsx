import React from "react";
import { BookOpen, ExternalLink, ArrowUpRight } from "lucide-react";

export default function LinkCard({
    url = "https://google.com",
    text = "Click here to view the module...",
    icon: Icon = ExternalLink,
    bgColor = "bg-amber-300",
}) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`select-none group flex items-center justify-between p-2 sm:p-4 bg-linear-to-l from-yellow-400 to-yellow-300 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 active:translate-x-1 active:translate-y-1 cursor-pointer`}
        >
            <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg border-2 border-black">
                    <ExternalLink className="w-3 h-3 sm:w-5 sm:h-5 text-black stroke-[2.5]" />
                </div>
                <div>
                    <h4 className="text-xs sm:text-sm font-extrabold sm:font-black text-black uppercase tracking-wide">
                        {text}
                    </h4>
                    <p className="hidden sm:flex text-xs text-black/80">
                        Visit
                    </p>
                </div>
            </div>
            <div className=" hidden sm:flex items-center gap-1 text-xs font-black text-black bg-white px-3 py-2 rounded-lg border-2 border-black transition-colors">
                <span>Visit</span>
                <ArrowUpRight className="w-4 h-4 stroke-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
        </a>
    );
}