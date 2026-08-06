import React, { useState } from "react";
import { Copy, Check, Hash, Sparkles } from "lucide-react";

// Cleaned dataset without the group property
const CODES = [
    { name: "Stella", code: "E64A4" },
    { name: "Nexus", code: "8C692" },
    { name: "Cosmo", code: "0C437" },
    { name: "Nebula", code: "9DE3D" },
    { name: "Petra", code: "6C397" },
    { name: "Sirius", code: "E67D9" },
    { name: "Astreon", code: "24595" },
    { name: "Draco", code: "279F6" },
    { name: "Lunar", code: "7FF3B" },
    { name: "Linus", code: "5E1BE" },
    { name: "Helios", code: "DA12B" },
    { name: "Orion", code: "7E1AD" },
    { name: "Terra", code: "9C557" },
    { name: "Aster", code: "E48AA" },
    { name: "Starla", code: "135DA" },
    { name: "Gamma", code: "5A4B5" },
];

export default function CodeListTable({ codes = CODES }) {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleCopy = (code, index) => {
        navigator.clipboard.writeText(code);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className="w-full max-w-xl mx-auto bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-amber-400 border-b-2 border-black text-black">
                <div className="flex items-center gap-2">
                    <h3 className="text-sm font-extrabold uppercase">
                        KODE PEMECAHAN NAMA KELOMPOK
                    </h3>
                </div>
            </div>

            {/* Table Bar */}
            <div className="grid grid-cols-12 bg-yellow-100 px-4 py-2.5 text-xs font-bold text-black uppercase tracking-wider border-b-2 border-black">
                <div className="hidden sm:flex sm:col-span-2">
                    #
                </div>
                <div className="col-span-6 sm:col-span-5">GROUP</div>
                <div className="col-span-6 sm:col-span-5 text-right">CODE</div>
            </div>

            {/* Item List */}
            <div className="divide-y-2 divide-black">
                {codes.map((item, index) => {
                    const isCopied = copiedIndex === index;
                    return (
                        <div
                            key={index}
                            className="grid grid-cols-12 items-center px-4 py-3 hover:bg-amber-100 transition-colors group"
                        >
                            {/* No. */}
                            <div className="hidden sm:flex sm:col-span-2 text-xs text-black/70">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            {/* Name */}
                            <div className="col-span-6 sm:col-span-5 text-sm font-bold text-black truncate pr-2">
                                {item.name}
                            </div>

                            {/* Code + Copy Button */}
                            <div className="col-span-6 sm:col-span-5 flex items-center justify-end gap-2">
                                <code className="font-mono text-xs font-bold text-black bg-white group-hover:bg-amber-200 px-2.5 py-1 rounded-md border-2 border-black transition-colors">
                                    {item.code}
                                </code>

                                <button
                                    type="button"
                                    onClick={() => handleCopy(item.code, index)}
                                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-black border-2 border-black transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${isCopied
                                        ? "bg-emerald-400 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                        : "bg-white hover:bg-yellow-300 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                        }`}
                                    title="Copy code"
                                >
                                    {isCopied ? (
                                        <>
                                            <Check className="w-3.5 h-3.5 stroke-3" />
                                            <span className="hidden sm:inline">Copied</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-3.5 h-3.5 stroke-[2.5]" />
                                            <span className="hidden sm:inline">Copy</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}