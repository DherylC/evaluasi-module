import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    Megaphone, AlertCircle, LinkIcon, Trophy,
    Users,
    Calendar,
    Presentation,
    BookOpen,
    FileSpreadsheet,
    Layers,
    Globe,
    ListTodo,
    FileText,
    ArrowRight,
    ExternalLink,
} from "lucide-react";
import { getLatestNews } from "../apis/fetchnews";
import { useAuth } from "../context/AuthContext";
import ModalLinkItem from "../components/ModalLinkItem";
import Modal from "../components/Modal";

export default function HomePage() {

    const [latestHeadline, setLatestHeadline] = useState("Loading latest news...");
    const { isCoordinator, password } = useAuth();

    const [modalState, setModalState] = useState({
        isOpen: false,
        title: "",
        content: null,
    });

    // 2. Define the missing function!
    const openContentModal = (title, content) => {
        setModalState({
            isOpen: true,
            title: title,
            content: content,
        });
    };

    const closeModal = () => {
        setModalState((prev) => ({ ...prev, isOpen: false }));
    };

    const linksData = [
        {
            title: "ABSENSI PESERTA PPIF 2026",
            url: "https://docs.google.com/spreadsheets/d/1pzWvfVVcGIrLhnzSh9eRX12EwfzVDK6Nb3t3g_DndM4/edit?usp=sharing",
            icon: ListTodo,
            subtitle: "Google Sheets",
            category: "Gladi Kotor",
        },
        {
            title: "PENUGASAN PESERTA PPIF 2026",
            url: "https://drive.google.com/file/d/19AsgPWilotRj67ZHIVHGe_mUx-5hywVP/view",
            icon: Presentation,
            subtitle: "PDF · Document",
            category: "GK",
        },
        {
            title: "Website Aktivitas PPIF 2026",
            url: "https://game-ppif.umn.ac.id/admin",
            icon: Globe,
            subtitle: "Web Link",
            category: "Gladi Kotor",
        },
        {
            title: "Rundown D-Day PPIF 2026",
            url: "",
            icon: Globe,
            subtitle: "Lihat Detail Rundown",
            category: "Gladi Kotor",
            type: "modal",
            modalContent: (
                <div className="space-y-4">
                    {/* Local asset reference */}
                    <img
                        src="/rundown/rundown.jpeg" // points to public/images/rundown-2026.png
                        alt="Rundown D-Day PPIF 2026"
                        className="w-full h-auto rounded-xl border-2 border-black object-contain"
                    />
                    <p className="text-xs text-center font-bold text-gray-600">
                        *Jadwal dapat berubah sewaktu-waktu sesuai kondisi di lapangan.
                    </p>
                </div>
            ),
        },

        {
            title: "GUIDEBOOK Aktivitas D-Day",
            url: "https://drive.google.com/file/d/1CmM_1GazDIHLDsamQo9HSqTZVEBGLZwq/view",
            icon: FileText,
            subtitle: "PDF · Document",
            category: "Gladi Kotor",
        },
        {
            title: "GUIDEBOOK Pemecahan Nama Kelompok",
            url: "https://drive.google.com/file/d/1c4D5w6QBa_VIURDM_PsC5t-Ff8rwH6AR/view",
            icon: FileText,
            subtitle: "PDF · Document",
            category: "GK",
        },

        {
            title: "DATA ABSENSI PESERTA PPIF 2025",
            url: "#",
            icon: Users,
            subtitle: "Google Sheets",
            category: "Briefing Day",
        },
        {
            title: "Modul Penugasan PPIF 2025",
            url: "#",
            icon: BookOpen,
            subtitle: "PDF · Document",
            category: "Briefing Day",
        },
        {
            title: "Form Pengumpulan Kelompok Tercepat",
            url: "#",
            icon: ListTodo,
            subtitle: "Google Form",
            category: "Briefing Day",
        },
        {
            title: "Modul Pemecahan Nama Kelompok ",
            url: "#",
            icon: FileText,
            subtitle: "PDF · Document",
            category: "Briefing Day",
        },
        {
            title: "Recap Penugasan Terbaik",
            url: "#",
            icon: Trophy,
            subtitle: "Google Sheets",
            category: "Briefing Day",
        },


        {
            title: "PPT FIX DOMINATION DAY",
            url: "#",
            icon: Presentation,
            subtitle: "Google Slides",
            category: "Briefing Day",
        },

        {
            title: "Spreedsheet Hasil Penugasan Striders",
            url: "#",
            icon: FileSpreadsheet,
            subtitle: "Google Sheets",
            category: "Briefing Day",
        },
        {
            title: "RUNDOWN HARI H",
            url: "#",
            icon: Calendar,
            subtitle: "Google Sheets",
            category: "D-Day",
        },
        {
            title: "DATA KELOMPOK PESERTA PPIF 2026",
            url: "#",
            icon: Layers,
            subtitle: "Google Sheets",
            category: "Briefing Day",
        },
        {
            title: "WEBSITE PPIF 2025",
            url: "#",
            icon: Globe,
            subtitle: "Web Link",
            category: "D-Day",
        },

        {
            title: "List Ruangan Module",
            url: "https://docs.google.com/spreadsheets/d/1lXsjlj2kwVsfSoQw827wKcrRy__tYG61N0nQPoZ9pW0/edit?usp=drive_link",
            icon: FileText,
            subtitle: "Google Sheets",
            category: "Coordinator Panel",
        },
        {
            title: "Absensi Rangkaian Module",
            url: "https://docs.google.com/spreadsheets/d/1ayDaNK-e5Jk951ORNdqNQ6TSvmD6h9eKxWd3_042SXo/edit?usp=drive_link",
            icon: FileText,
            subtitle: "Google Sheets",
            category: "Coordinator Panel",
        },
        {
            title: "DATABASE WEBSITE MODULE",
            url: "https://docs.google.com/spreadsheets/d/1ErMG6pXKr_LohkcvUl6R83pc7a46yVITq_xj_Wo9awg/edit?usp=sharing",
            icon: Layers,
            subtitle: "Google Sheets",
            category: "Coordinator Panel",
        }
    ];

    useEffect(() => {
        document.title = "Module 101";

        getLatestNews().then((data) => {
            if (data && data.length > 0) {
                const firstRow = data[0];
                // Checks for 'title' key or falls back to the very first column value in the row
                const headline = firstRow.title || Object.values(firstRow)[0] || "No news text";
                setLatestHeadline(headline);
            } else {
                setLatestHeadline("No headline available.");
            }
        });
    }, []);

    return (
        <div className="select-none relative min-h-screen bg-red-50 px-4 py-6 sm:py-8  font-sans overflow-hidden">

            {/* Moving Background Halftone Dot Pattern */}
            <div
                className="absolute inset-0 opacity-15 pointer-events-none animate-halftone"
                style={{
                    backgroundImage: "radial-gradient(#000 2px, transparent 2px)",
                    backgroundSize: "16px 16px"
                }}
            />

            <div className="pt-16 relative z-10 mx-auto max-w-xl flex flex-col gap-6">
                {/* Hero Title Banner */}
                <div className="relative text-center my-2">
                    <span className="inline-block -rotate-2 bg-yellow-400 px-4 py-1 text-xs font-black uppercase text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-2">
                        PPIF 2026
                    </span>
                    <h1 className="text-4xl -rotate-1 sm:text-5xl font-black italic uppercase text-red-500 tracking-tight drop-shadow-[2px_4px_0px_rgba(0,0,0,1)] [-webkit-text-stroke:2px_black]">
                        MODULE 101
                    </h1>
                </div>

                {/* --- LATEST NEWS HEADLINE BANNER --- */}
                <div className="bg-yellow-300 border-3 border-black px-6 py-4 rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3 relative transition-transform">
                    {/* Comic Flash Tag - Positioned absolute to straddle the top border */}
                    <span className="absolute -top-4.5 left-4 shrink-0 bg-red-600 text-white font-black text-[10px] sm:text-xs uppercase px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 -rotate-2">
                        <Megaphone className="w-4 h-4 shrink-0 stroke-[2.5] animate-pulse" />
                        NEWS
                    </span>

                    {/* Headline Text / Marquee Message */}
                    <div className="flex-1 overflow-hidden">
                        <p className="font-extrabold text-black text-xs sm:text-sm">
                            {latestHeadline}
                        </p>
                    </div>
                </div>

                <div className="animate-fade-in relative rounded-2xl bg-white border-3 sm:border-4 border-black pt-4 p-2 sm:pt-6 sm:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
                >

                    <div className="relative z-10 space-y-8">
                        {["Gladi Kotor"].map((category) => {
                            const filteredLinks = linksData.filter((item) => item.category === category);
                            if (filteredLinks.length === 0) return null;

                            return (
                                <div key={category} className="md:space-y-4 space-y-2">
                                    {/* Category Tag */}
                                    <div className="inline-block bg-yellow-300 ml-2 px-4 py-0.5 text-[12px] md:text-[16px] font-black uppercase text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                                        {category}
                                    </div>

                                    {/* Link / Modal List */}
                                    <div className="space-y divide-black/10">
                                        {filteredLinks.map((item, index) => (
                                            <ModalLinkItem
                                                key={index}
                                                item={item}
                                                onOpenModal={(title, content) => openContentModal(title, content)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>

                {/* Comic Grid Layout */}
                <div className="flex flex-col gap-4 sm:gap-5">

                    {/* TOP ROW: Full Width Evaluasi */}
                    <div className="animate-fade-in" style={{ animationDelay: '0ms' }}>
                        <ComicCard
                            title="Evaluasi"
                            badge="SIMUL 4 UPDATE!"
                            badgeBg="bg-cyan-700 text-white"
                            link="/evaluations"
                            rotate="rotate-1"
                            isWide
                            desc="Last Updated: Simulasi IV (31 Juli 2026)"
                        />
                    </div>

                    {/* ROW 2: 2 Columns (Compact Height) */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div className="animate-fade-in" style={{ animationDelay: '50ms' }}>
                            <ComicCard
                                title="Regulasi"
                                badge="PATUHI!"
                                badgeBg="bg-red-600 text-white"
                                link="/regulations"
                                rotate="rotate-1"
                                desc="Regulasi Orbits, dll"
                                isCompact
                            />
                        </div>

                        <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                            <ComicCard
                                title="Timeline"
                                badge="Make Time!"
                                badgeBg="bg-yellow-400 text-black"
                                link="/timeline"
                                rotate="rotate-1"
                                isCompact
                                desc="View Events"
                            />
                        </div>
                    </div>

                    {/* ROW 3: 3 Columns */}
                    <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                        <div className="animate-fade-in" style={{ animationDelay: '150ms' }}>
                            <ComicCard
                                title="Aktivitas"
                                badgeBg="bg-cyan-400"
                                link="https://drive.google.com/file/d/1CmM_1GazDIHLDsamQo9HSqTZVEBGLZwq/view"
                                rotate="-rotate-1"
                                isCompact
                                desc={<LinkIcon size={16} />}
                            />
                        </div>

                        <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                            <ComicCard
                                title="Cheat Sheet"
                                badgeBg="bg-emerald-400"
                                link="https://docs.google.com/document/d/16WrTbQGQPQHfcAVkq1UWdYHwYvEisOx5lBRav8PKUvo/"
                                rotate="rotate-1"
                                isCompact
                                desc={<LinkIcon size={16} />}
                            />
                        </div>

                        <div className="animate-fade-in" style={{ animationDelay: '250ms' }}>
                            <ComicCard
                                title="INTERFACE"
                                badgeBg="bg-purple-500 text-white"
                                link="https://game-ppif.umn.ac.id/admin"
                                rotate="-rotate-1"
                                isCompact
                                desc="WIP"
                            />
                        </div>
                    </div>

                    {/* ROW 4: 2 Columns (Compact Height) */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
                            <ComicCard
                                title="Briefing Day"
                                badgeBg="bg-yellow-400"
                                link="/briefing-day"
                                rotate="-rotate-1"
                                isCompact
                                desc="Zoom Meeting 101"
                            />
                        </div>

                        <div className="animate-fade-in" style={{ animationDelay: '350ms' }}>
                            <ComicCard
                                title="Storyline"
                                badge=""
                                badgeBg="bg-yellow-500 text-black"
                                link="/storyline"
                                rotate="rotate-1"
                                isCompact
                                desc="Know the Flow"
                            />
                        </div>
                    </div>

                    {/* COORDINATOR PANEL */}
                    {isCoordinator &&
                        <div className="animate-fade-in relative rounded-2xl bg-white border-3 sm:border-4 border-black pt-4 p-2 sm:pt-6 sm:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
                            style={{ animationDelay: '400ms' }}>

                            <div className="relative z-10 space-y-8">
                                {["Coordinator Panel"].map((category) => {
                                    const filteredLinks = linksData.filter((item) => item.category === category);
                                    if (filteredLinks.length === 0) return null;

                                    return (
                                        <div key={category} className="md:space-y-4 space-y-2">
                                            {/* Category Section Tag */}
                                            <div className="inline-block bg-yellow-300 ml-2 px-4 py-0.5 text-[12px] md:text-[16px] font-black uppercase text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                                                {category}
                                            </div>

                                            {/* Link Rows */}
                                            <div className="space-y divide-black/10">
                                                {filteredLinks.map((item, index) => {
                                                    const IconComponent = item.icon;
                                                    return (
                                                        <a
                                                            key={index}
                                                            href={item.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="group block w-full p-4 transition-colors hover:bg-yellow-50 active:bg-yellow-50 rounded-xl"
                                                        >
                                                            <div className="flex items-center justify-between gap-3">
                                                                {/* Left Side: Icon & Titles */}
                                                                <div className="flex items-center gap-3.5 min-w-0">
                                                                    <div className="shrink-0 p-3 rounded-xl border  group-hover:border-red-500 group-active:border-red-500 transition-all duration-200">
                                                                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-red-600 group-active:text-red-600 stroke-2 transition-all duration-200" />
                                                                    </div>
                                                                    <div className="min-w-0">
                                                                        <h3 className="text-xs sm:text-sm font-extrabold uppercase group-hover:text-red-600 group-active:text-red-600 transition-all duration-200">
                                                                            {item.title}
                                                                        </h3>
                                                                        {item.subtitle && (
                                                                            <p className="text-[11px] text-gray-500 mt-0.5">
                                                                                {item.subtitle}
                                                                            </p>
                                                                        )}
                                                                    </div>
                                                                </div>

                                                                {/* Right Side: Action Arrow */}
                                                                <div className="shrink-0">
                                                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-2 text-black group-hover:translate-x-0.5 transition-transform" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    }

                    {/* PAGE ROW LIST (GROUPED BY DAY 1 & DAY 2 INSIDE SINGLE COMIC PANEL) */}
                    <div className="hidden animate-fade-in relative rounded-2xl bg-white border-3 sm:border-4 border-black pt-4 p-2 sm:pt-6 sm:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
                        style={{ animationDelay: '400ms' }}>

                        <div className="relative z-10 space-y-8">
                            {["Briefing Day", "D-Day"].map((category) => {
                                const filteredLinks = linksData.filter((item) => item.category === category);
                                if (filteredLinks.length === 0) return null;

                                return (
                                    <div key={category} className="md:space-y-4 space-y-2">
                                        {/* Category Section Tag */}
                                        <div className="inline-block bg-yellow-300 ml-2 px-4 py-0.5 text-[12px] md:text-[16px] font-black uppercase text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                                            {category}
                                        </div>

                                        {/* Link Rows */}
                                        <div className="space-y divide-black/10">
                                            {filteredLinks.map((item, index) => {
                                                const IconComponent = item.icon;
                                                return (
                                                    <a
                                                        key={index}
                                                        href={item.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group block w-full p-4 transition-colors hover:bg-yellow-50 active:bg-yellow-50 rounded-xl"
                                                    >
                                                        <div className="flex items-center justify-between gap-3">
                                                            {/* Left Side: Icon & Titles */}
                                                            <div className="flex items-center gap-3.5 min-w-0">
                                                                <div className="shrink-0 p-3 rounded-xl border  group-hover:border-red-500 group-active:border-red-500 transition-all duration-200">
                                                                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-red-600 group-active:text-red-600 stroke-2 transition-all duration-200" />
                                                                </div>
                                                                <div className="min-w-0">
                                                                    <h3 className="text-xs sm:text-sm font-extrabold uppercase group-hover:text-red-600 group-active:text-red-600 transition-all duration-200">
                                                                        {item.title}
                                                                    </h3>
                                                                    {item.subtitle && (
                                                                        <p className="text-[11px] text-gray-500 mt-0.5">
                                                                            {item.subtitle}
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </div>

                                                            {/* Right Side: Action Arrow */}
                                                            <div className="shrink-0">
                                                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-2 text-black group-hover:translate-x-0.5 transition-transform" />
                                                            </div>
                                                        </div>
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {modalState.isOpen && (
                <Modal
                    open={modalState.isOpen}  // <-- Passing 'isOpen'
                    title={modalState.title}
                    onClose={closeModal}
                >
                    {modalState.content}
                </Modal>
            )}
        </div>


    );
}

// Reusable Comic Panel Component
function ComicCard({
    title,
    badge,
    badgeBg,
    link,
    rotate = "",
    isSmall = false,
    isWide = false,
    isCompact = false,
    isSquished = false,
    desc,
}) {
    const heightClass = isSquished
        ? "h-11 sm:h-12 py-1 px-3 flex-row items-center justify-between"
        : isSmall
            ? "min-h-27.5 sm:min-h-32.5 p-3 flex-col justify-between"
            : isCompact
                ? "min-h-24 sm:min-h-28 p-3 flex-col justify-between"
                : isWide
                    ? "min-h-30 flex-col justify-between p-4"
                    : "flex-col justify-between p-4";

    const content = (
        <div
            className={`group relative flex rounded-2xl bg-white border-3 sm:border-4 border-black 
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] 
        transition-all duration-150 transform hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5
        ${rotate} ${heightClass}`}
        >
            <div
                className="absolute inset-0 opacity-5 pointer-events-none rounded-xl"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, #000 25%, transparent 25%)",
                    backgroundSize: "8px 8px",
                }}
            />

            {isSquished ? (
                <>
                    <div className="flex items-center gap-1.5 min-w-0 pr-2">
                        <h2 className="font-black uppercase tracking-tight text-black text-xs sm:text-sm truncate group-hover:text-red-600 transition-colors">
                            {title}
                        </h2>
                        {badge && (
                            <span
                                className={`shrink-0 text-[8px] sm:text-[9px] font-black uppercase px-1.5 py-0.5 border-1.5 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] -rotate-2 ${badgeBg}`}
                            >
                                {badge}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center shrink-0 gap-1">
                        {desc && (
                            <span className="text-[10px] text-gray-500 font-bold flex items-center">
                                {desc}
                            </span>
                        )}
                        <span className="text-xs sm:text-sm font-black text-black group-hover:translate-x-1 transition-transform">
                            →
                        </span>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex justify-between items-start mb-1">
                        <h2
                            className={`font-black uppercase tracking-tight text-black leading-tight group-hover:text-red-600 transition-colors ${isSmall || isCompact ? "text-xs sm:text-sm" : "text-base sm:text-lg"
                                }`}
                        >
                            {title}
                        </h2>
                        {badge && (
                            <span
                                className={`shrink-0 text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 border-2 border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] -rotate-3 ${badgeBg}`}
                            >
                                {badge}
                            </span>
                        )}
                    </div>

                    <div className="flex justify-between items-end mt-auto">
                        {desc ? (
                            <p className="text-[10px] sm:text-xs text-gray-500 font-bold line-clamp-1">
                                {desc}
                            </p>
                        ) : (
                            <span className="text-[10px] text-gray-400 font-extrabold italic" />
                        )}
                        <span className="text-xs sm:text-sm font-black text-black group-hover:translate-x-1 transition-transform ml-1">
                            →
                        </span>
                    </div>
                </>
            )}
        </div>
    );

    return link ? (
        <Link to={link}>{content}</Link>
    ) : (
        <div className="cursor-pointer">{content}</div>
    );
}