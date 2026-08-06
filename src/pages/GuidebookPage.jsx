import React from "react";
import { ExternalLink, FileText, BookOpen, ScrollText, Orbit, Eclipse } from "lucide-react";
import urls from "../urls.json";

export default function GuidebookPage({
    pdf1 = {
        badge: "BRIEFING DAY",
        title: "Guidebook Briefing Day",
        description: "Pemecahan Nama Kelompok, kode website, Storyline awal.",
        url: urls.guidebookBriefing,
    },
    pdf2 = {
        badge: "PENUGASAN",
        title: "Modul Penugasan Peserta",
        description: "Scratch tutorial & link pengumpulan.",
        url: urls.guidebookPenugasan,
    },
    pdf3 = {
        badge: "D-DAY",
        title: "Guidebook Aktivitas D-Day",
        description: "Storyline, sistematika aktivitas, closing, durasi.",
        url: urls.guidebookAktivitas,
    }
}) {
    return (
        <div className="select-none min-h-screen flex flex-col justify-center p-4 sm:p-8 relative overflow-hidden font-sans selection:bg-yellow-400 selection:text-black">

            {/* Background Halftone Pattern / Comic Rays */}
            <div
                className="absolute inset-0 opacity-15 pointer-events-none animate-halftone"
                style={{
                    backgroundImage: 'radial-gradient(#000 2px, transparent 2px)',
                    backgroundSize: '16px 16px'
                }}
            />

            {/* Header Banner */}
            <div className="animate-fade-in mt-24 mb-8 text-center relative z-10 shrink-0">
                <h1 className="text-2xl sm:text-4xl font-black uppercase text-black tracking-tight">
                    All Documents
                </h1>
            </div>

            {/* Grid: 3 Equal-Height Columns on Desktop, Stacks on Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto w-full flex-1 relative z-10 pb-4">

                {/* ================= COLUMN 1: PDF 1 ================= */}
                <a
                    href={pdf1.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-fade-in group flex flex-col justify-between p-6 bg-amber-300 hover:bg-yellow-300 border-3 sm:border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1.5 hover:translate-y-1.5 active:translate-x-1.5 active:translate-y-1.5 transition-all duration-150 cursor-pointer h-full"
                    style={{ animationDelay: '50ms' }}
                >
                    <div>
                        {/* Header: Logo + Badge */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="p-3 bg-white rounded-xl border-2 sm:border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Orbit className="w-6 h-6 sm:w-7 sm:h-7 text-black stroke-[2.5]" />
                            </div>
                            <span className="text-xs font-black uppercase bg-black text-white px-3 py-1.5 rounded-lg border border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                                {pdf1.badge}
                            </span>
                        </div>

                        <h2 className="text-lg sm:text-2xl font-black text-black uppercase tracking-tight mb-2">
                            {pdf1.title}
                        </h2>
                        <p className="text-xs sm:text-sm font-bold text-black/80 leading-relaxed">
                            {pdf1.description}
                        </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between bg-white px-4 py-3 rounded-xl border-2 sm:border-3 border-black font-black text-xs sm:text-sm text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                        <span>View Document</span>
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 stroke-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                </a>

                {/* ================= COLUMN 2: PDF 2 ================= */}
                <a
                    href={pdf2.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-fade-in group flex flex-col justify-between p-6 bg-red-400 hover:bg-red-300 border-3 sm:border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1.5 hover:translate-y-1.5 active:translate-x-1.5 active:translate-y-1.5 transition-all duration-150 cursor-pointer h-full"
                    style={{ animationDelay: '125ms' }}
                >
                    <div>
                        {/* Header: Logo + Badge */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="p-3 bg-white rounded-xl border-2 sm:border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-black stroke-[2.5]" />
                            </div>
                            <span className="text-xs font-black uppercase bg-black text-white px-3 py-1.5 rounded-lg border border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                                {pdf2.badge}
                            </span>
                        </div>

                        <h2 className="text-lg sm:text-2xl font-black text-black uppercase tracking-tight mb-2">
                            {pdf2.title}
                        </h2>
                        <p className="text-xs sm:text-sm font-bold text-black/80 leading-relaxed">
                            {pdf2.description}
                        </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between bg-white px-4 py-3 rounded-xl border-2 sm:border-3 border-black font-black text-xs sm:text-sm text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                        <span>View Document</span>
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 stroke-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                </a>

                {/* ================= COLUMN 3: PDF 3 ================= */}
                <a
                    href={pdf3.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-fade-in group flex flex-col justify-between p-6 bg-cyan-300 hover:bg-cyan-200 border-3 sm:border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1.5 hover:translate-y-1.5 active:translate-x-1.5 active:translate-y-1.5 transition-all duration-150 cursor-pointer h-full"
                    style={{ animationDelay: '200ms' }}
                >
                    <div>
                        {/* Header: Logo + Badge */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="p-3 bg-white rounded-xl border-2 sm:border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Eclipse className="w-6 h-6 sm:w-7 sm:h-7 text-black stroke-[2.5]" />
                            </div>
                            <span className="text-xs font-black uppercase bg-black text-white px-3 py-1.5 rounded-lg border border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                                {pdf3.badge}
                            </span>
                        </div>

                        <h2 className="text-lg sm:text-2xl font-black text-black uppercase tracking-tight mb-2">
                            {pdf3.title}
                        </h2>
                        <p className="text-xs sm:text-sm font-bold text-black/80 leading-relaxed">
                            {pdf3.description}
                        </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between bg-white px-4 py-3 rounded-xl border-2 sm:border-3 border-black font-black text-xs sm:text-sm text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                        <span>View Document</span>
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 stroke-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                </a>

            </div>
        </div>
    );
}