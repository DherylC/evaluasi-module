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
        <div className="w-full max-w-xl mx-auto my-4 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-linear-to-r from-red-500 to-yellow-400 text-white">
                <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold tracking-wide uppercase">
                        KODE PEMECAHAN NAMA KELOMPOK
                    </h3>
                </div>
                <span className="text-xs bg-gray-700/80 text-gray-300 px-2.5 py-1 rounded-full border border-gray-600">
                    {codes.length} Groups
                </span>
            </div>

            {/* Table Bar */}
            <div className="grid grid-cols-12 bg-gray-100/80 px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-200">
                <div className="col-span-2 text-center flex items-start gap-1">
                    #
                </div>
                <div className="col-span-5">GROUP</div>
                <div className="col-span-5 text-right pr-3">UNIQUE CODE</div>
            </div>

            {/* Item List */}
            <div className="divide-y divide-gray-100">
                {codes.map((item, index) => {
                    const isCopied = copiedIndex === index;
                    return (
                        <div
                            key={index}
                            className="grid grid-cols-12 items-center px-4 py-3 hover:bg-yellow-50/50 transition-colors group"
                        >
                            {/* No. */}
                            <div className="col-span-2 text-xs font text-gray-400 group-hover:text-gray-600">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            {/* Name */}
                            <div className="col-span-5 text-sm font-semibold text-gray-800 truncate pr-2">
                                {item.name}
                            </div>

                            {/* Code + Copy Button */}
                            <div className="col-span-5 flex items-center justify-end gap-2">
                                <code className="font-mono text-xs font-bold text-gray-800 bg-gray-100 group-hover:bg-yellow-100 px-2.5 py-1 rounded-md border border-gray-200 transition-colors">
                                    {item.code}
                                </code>

                                <button
                                    type="button"
                                    onClick={() => handleCopy(item.code, index)}
                                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-200 active:scale-95 ${isCopied
                                        ? "bg-emerald-500 text-white shadow-sm"
                                        : "bg-gray-100 hover:bg-gray-900 text-gray-700 hover:text-white border border-gray-200 hover:border-gray-900"
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
                                            <Copy className="w-3.5 h-3.5" />
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