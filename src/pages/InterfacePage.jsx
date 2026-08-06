import React from "react";
import { ExternalLink, ShieldCheck, UserCheck, Layers, FolderGit2, Orbit, Eclipse } from "lucide-react";
import urls from "../urls.json"

export default function InterfacePage({
    link1 = {
        title: "PEMECAHAN NAMA KELOMPOK",
        description: "Page Aktivitas & Website resmi PPIF 2026  yang akan digunakan pada Briefing Day PPIF 2026.",
        url: urls.webBriefing,
    },
    adminLink = {
        title: "Admin",
        description: "Khusus Module per kelas",
        url: urls.webAktivitasAdmin,
    },
    guestLink = {
        title: "Peserta",
        description: "Khusus Variants, 3 device per kelompok.",
        url: urls.webAktivitasGuest,
    },
}) {
    return (
        <div className=" select-none min-h-screen flex flex-col justify-center p-4 sm:p-8 relative overflow-hidden font-sans selection:bg-yellow-400 selection:text-black">

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
                    INTERFACE PORTAL
                </h1>
            </div>

            {/* Grid: Stretches full available height */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-5xl mx-auto w-full flex-1 relative z-10 pb-4">

                {/* ================= COLUMN 1: MAIN MODULE ================= */}
                <a
                    href={link1.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-fade-in group flex flex-col justify-between p-6 sm:p-8 bg-amber-300 hover:bg-yellow-300 border-3 sm:border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.75 hover:translate-y-0.75 active:translate-x-1.5 active:translate-y-1.5 transition-all duration-150 cursor-pointer h-full"
                    style={{ animationDelay: '50ms' }}
                >
                    <div>
                        {/* Column Header: Logo + Badge Title */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="p-3 bg-white rounded-xl border-2 sm:border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform">
                                <Orbit className="w-6 h-6 sm:w-8 sm:h-8 text-black stroke-[2.5]" />
                            </div>
                            <span className="text-xs font-black uppercase bg-black text-white px-3 py-1.5 rounded-lg border border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                                Briefing Day
                            </span>
                        </div>

                        <h2 className="text-xl sm:text-3xl font-black text-black uppercase tracking-tight mb-3">
                            {link1.title}
                        </h2>
                        <p className="text-xs sm:text-base font-bold text-black/80 leading-relaxed">
                            {link1.description}
                        </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between bg-white px-4 py-3 rounded-xl border-2 sm:border-3 border-black font-black text-xs sm:text-sm text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                        <span>Open link</span>
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 stroke-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                </a>

                {/* ================= COLUMN 2: ACCESS PORTALS ================= */}
                <div
                    className="animate-fade-in flex flex-col justify-between p-6 sm:p-8 bg-amber-300 border-3 sm:border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-full"
                    style={{ animationDelay: '100ms' }}
                >

                    {/* Top Section: Column Header + Details */}
                    <div>
                        {/* Column Header: Logo + Badge Title */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="p-3 bg-white rounded-xl border-2 sm:border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Eclipse className="w-6 h-6 sm:w-8 sm:h-8 text-black stroke-[2.5]" />
                            </div>
                            <span className="text-xs font-black uppercase bg-black text-white px-3 py-1.5 rounded-lg border border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                                D-Day
                            </span>
                        </div>

                        <h2 className="text-xl sm:text-3xl font-black text-black uppercase tracking-tight mb-3">
                            GAME FLOW
                        </h2>
                        <p className="text-xs sm:text-base font-bold text-black/80 leading-relaxed">
                            Page Aktivitas yang akan digunakan pada D-Day PPIF 2026.
                        </p>
                    </div>

                    {/* Bottom Section: Stacked Link Cards */}
                    <div className="mt-8 flex flex-col gap-4 w-full">

                        {/* Admin Link */}
                        <a
                            href={adminLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="animate-fade-in group flex items-center justify-between p-4 bg-red-400 hover:bg-red-300 border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all duration-150 cursor-pointer"
                            style={{ animationDelay: '175ms' }}
                        >
                            <div className="flex items-center gap-3.5 min-w-0">
                                <div className="hidden sm:flex p-2.5 bg-white rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0 transition-transform">
                                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-black stroke-[2.5]" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-sm sm:text-base font-black text-black uppercase truncate">
                                        {adminLink.title}
                                    </h3>
                                    <p className="text-xs font-bold text-black/80 truncate">
                                        {adminLink.description}
                                    </p>
                                </div>
                            </div>

                            <div className="p-2 bg-white rounded-lg border-2 border-black shrink-0 ml-2">
                                <ExternalLink className="w-4 h-4 text-black stroke-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </div>
                        </a>

                        {/* Guest Link */}
                        <a
                            href={guestLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="animate-fade-in group flex items-center justify-between p-4 bg-cyan-300 hover:bg-cyan-200 border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all duration-150 cursor-pointer"
                            style={{ animationDelay: '250ms' }}
                        >
                            <div className="flex items-center gap-3.5 min-w-0">
                                <div className=" hidden sm:flex  p-2.5 bg-white rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0 transition-transform">
                                    <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-black stroke-[2.5]" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-sm sm:text-base font-black text-black uppercase truncate">
                                        {guestLink.title}
                                    </h3>
                                    <p className="text-xs font-bold text-black/80 truncate">
                                        {guestLink.description}
                                    </p>
                                </div>
                            </div>

                            <div className="p-2 bg-white rounded-lg border-2 border-black shrink-0 ml-2">
                                <ExternalLink className="w-4 h-4 text-black stroke-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </div>
                        </a>

                    </div>

                </div>

            </div>
        </div>
    );
}