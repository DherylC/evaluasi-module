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
    File,
    ArrowRight,
    ExternalLink,
    ChevronRight,
    Table2
} from "lucide-react";
import { getLatestNews } from "../apis/fetchnews";
import { useAuth } from "../context/AuthContext";
import ModalLinkItem from "../components/ModalLinkItem";
import Modal from "../components/Modal";
import Countdown from "../components/Countdown";
import urls from "../urls.json"
import InfoCard from "../components/InfoCard";

export default function HomePage() {

    // Countdown Configuration
    const countdownDay = "2026-08-15"
    const countdownTime = "10:00:00"
    const countdownEvent = "BRIEFING DAY PPIF 2026"
    const countdownDoneMessage = "Event Ongoing"
    const countdownHide = false
    const countdownHideWhenDue = false

    const [latestHeadline, setLatestHeadline] = useState("Loading latest news...");
    const { isCoordinator, password } = useAuth();

    const [modalState, setModalState] = useState({
        isOpen: false,
        title: "",
        content: null,
    });

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

        // DATA & ABSENSI --------------------------------------------------------------------
        {
            title: "DATA & ABSENSI PESERTA PPIF 2026",
            url: "https://docs.google.com/spreadsheets/d/1SPCO-5yW_FXor9v2duZslzLIdYBsR0_NC2nu_naDguI/edit?usp=drivesdk",
            icon: ListTodo,
            subtitle: "Isi sesuai harinya",
            category: "PPIF 2026",
        },
        {
            title: "Sheets Hasil Penugasan Variants",
            url: "#",
            icon: Table2,
            subtitle: "View",
            type: "modal",
            category: "PPIF 20261",

            modalContent: (
                <div className="space-y-4">
                    <InfoCard
                        text="Content Pending. Menunggu data dirilis terlabih dahulu.."
                    />
                </div>
            )
        },
        {
            title: "PAPAN KELOMPOK PPIF 2026",
            url: "https://drive.google.com/file/d/1rwlvYeY9Lgz7mg2VOABU_uSV3JR4pIZt/view",
            icon: File,
            subtitle: "Gunakan untuk mengubah Profile Picture Grup WA.",
            category: "PPIF 2026",
        },

        // RUNDOWN --------------------------------------------------------------------
        {
            title: "Rundown Briefing Day PPIF 2026",
            url: "",
            icon: File,
            subtitle: "View",
            category: "PPIF 2026",
            type: "modal",
            modalContent: (
                <div className="space-y-4">
                    <img
                        src="/rundown/rundown-briefing.jpeg"
                        alt="Rundown Briefing Day PPIF 2026"
                        className="w-full h-auto rounded-xl border-2 border-black object-contain"
                    />
                    <p className="text-xs text-center font-bold text-gray-600">
                        *Jadwal dapat berubah sewaktu-waktu sesuai kondisi di lapangan.
                    </p>
                </div>
            ),
        },
        {
            title: "Rundown D-Day PPIF 2026",
            url: "",
            icon: File,
            subtitle: "View",
            category: "PPIF 2026",
            type: "modal",
            modalContent: (
                <div className="space-y-4">
                    <img
                        src="/rundown/rundown.jpeg"
                        alt="Rundown D-Day PPIF 2026"
                        className="w-full h-auto rounded-xl border-2 border-black object-contain"
                    />
                    <p className="text-xs text-center font-bold text-gray-600">
                        *Jadwal dapat berubah sewaktu-waktu sesuai kondisi di lapangan.
                    </p>
                </div>
            ),
        },

        // GUIDEBOOKS --------------------------------------------------------------------
        {
            title: "GUIDEBOOK Pemecahan Nama Kelompok",
            url: urls.guidebookBriefing,
            icon: File,
            subtitle: "Document",
            category: "Guidebooks",
        },
        {
            title: "GUIDEBOOK Aktivitas D-Day",
            url: urls.guidebookAktivitas,
            icon: File,
            subtitle: "Document",
            category: "Guidebooks",
        },
        {
            title: "MODUL PENUGASAN PESERTA PPIF 2026",
            url: urls.guidebookPenugasan,
            icon: Presentation,
            subtitle: "Document",
            category: "Guidebooks",
        },


        // WEBSITE AKTIVITAS
        {
            title: "Website BRIEFING DAY",
            url: urls.webBriefing,
            icon: Globe,
            subtitle: <LinkIcon className="h-3 w-3" />,
            category: "Gladi Bersih",
        },
        {
            title: "Kode Website BRIEFING DAY",
            url: "/briefing-day",
            icon: Globe,
            subtitle: <LinkIcon className="h-3 w-3" />,
            category: "Gladi Bersih",
        },
        {
            title: "Website Aktivitas D-Day",
            url: urls.webAktivitasAdmin,
            icon: Globe,
            subtitle: <LinkIcon className="h-3 w-3" />,
            category: "Gladi Bersih",
        },

        // HASIL PENUGASAN & AKTIVITAS
        {
            title: "Pemecah Nama Kelompok Tercepat",
            url: "#",
            icon: Trophy,
            subtitle: "View",
            type: "modal",
            category: "Awarding",

            modalContent: (
                <div className="space-y-4">
                    <img
                        src="/awarding/result.jpeg"
                        alt="Ranking Pemecahan Nama Kelompok"
                        className="w-full h-auto rounded-xl border-2 border-black object-contain"
                    />
                    <InfoCard
                        text="Content Pending. Menunggu data dirilis terlabih dahulu.."
                    />
                </div>
            )
        },
        {
            title: "Sheets Pengumpulan Penugasan Peserta",
            url: "https://docs.google.com/spreadsheets/d/1WwKhnH_VerjP99lom59XcOgDTn693VcnJms4AT1wYTg/edit?usp=drivesdk",
            icon: Table2,
            subtitle: "Mohon dicek secara berkala.",
            category: "Penugasan Peserta",
        },
        {
            title: "Recap Penugasan Terbaik",
            url: "https://docs.google.com/spreadsheets/d/12BKslwrQsZwMhiA358xeEgprbksaV8ivkKb3nVgLbPc/edit?usp=sharing",
            icon: Table2,
            subtitle: "Kirim 2 penugasan terbaik dari tiap kelompok.",
            category: "Penugasan Peserta",
        },

        // COORDINATOR PANEL LINKS --------------------------------------------------------------------
        {
            title: "List Ruangan Module",
            url: "https://docs.google.com/spreadsheets/d/1lXsjlj2kwVsfSoQw827wKcrRy__tYG61N0nQPoZ9pW0/edit?usp=drive_link",
            icon: File,
            subtitle: "Google Sheets",
            category: "Coordinator Panel",
        },
        {
            title: "Absensi Rangkaian Module",
            url: "https://docs.google.com/spreadsheets/d/1ayDaNK-e5Jk951ORNdqNQ6TSvmD6h9eKxWd3_042SXo/edit?usp=drive_link",
            icon: File,
            subtitle: "Google Sheets",
            category: "Coordinator Panel",
        },
        {
            title: "DATABASE WEBSITE MODULE",
            url: "https://docs.google.com/spreadsheets/d/1ErMG6pXKr_LohkcvUl6R83pc7a46yVITq_xj_Wo9awg/edit?usp=sharing",
            icon: Layers,
            subtitle: "Google Sheets",
            category: "Coordinator Panel",
        },

        /*
{
    title: "Data Peserta Dummy Gladi Bersih",
    url: "",
    icon: File,
    subtitle: "View",
    category: "Gladi Bersih",
    type: "modal",
    modalContent: (
        <div className="space-y-4">
            <img
                src="../dummy/dummy.jpeg"
                alt="Data Peserta Dummy PPIF 2026"
                className="w-full h-auto rounded-xl border-2 border-black object-contain"
            />
            <p className="text-xs text-center font-bold text-gray-600">
                *Plotting peserta dapat berubah sewaktu-waktu sesuai kondisi di lapangan.
            </p>
        </div>
    ),
},
*/
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
        <div className="select-none relative min-h-screen bg-red-50 px-4 py-6 sm:py-8 font-sans overflow-hidden">

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
                <div className="hidden relative text-center my-2">
                    <span className="inline-block -rotate-2 bg-yellow-400 px-4 py-1 text-xs font-black uppercase text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-2">
                        PPIF 2026
                    </span>
                    <h1 className="text-4xl -rotate-1 sm:text-5xl font-black italic uppercase text-red-500 tracking-tight drop-shadow-[2px_4px_0px_rgba(0,0,0,1)] [-webkit-text-stroke:2px_black]">
                        MODULE 101
                    </h1>
                </div>

                {/* --- LATEST NEWS HEADLINE BANNER --- */}
                <div className="hidden bg-yellow-300 border-3 border-black px-6 py-4 rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] items-center gap-3 relative transition-transform">
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

                <Countdown />

                <div className="space-y-6">
                    {["PPIF 2026", "Penugasan Peserta", "Guidebooks"].map((category, idx) => {
                        const filteredLinks = linksData.filter((item) => item.category === category);
                        if (filteredLinks.length === 0) return null;

                        return (
                            <div
                                key={category}
                                className="animate-fade-in relative rounded-2xl bg-white border-3 border-black p-2 sm:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <div className="relative z-10 space-y-3">
                                    {/* Category Tag */}
                                    <div className="inline-block mt-2 ml-2 bg-yellow-300 px-4 py-0.5 text-[12px] md:text-[16px] font-black uppercase text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                                        {category}
                                    </div>

                                    {/* Link / Modal List */}
                                    <div className="divide-y divide-black/10">
                                        {filteredLinks.map((item, index) => (
                                            <ModalLinkItem
                                                key={index}
                                                item={item}
                                                onOpenModal={(title, content) => openContentModal(title, content)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Comic Grid Layout */}
                <div className="flex flex-col gap-4 sm:gap-5">

                    {/* TOP ROW: Full Width PENUGASAN */}
                    <div className="hidden animate-fade-in" style={{ animationDelay: '0ms' }}>
                        <ComicCard
                            title="PENUGASAN SCRATCH"
                            badge="DL: 6 Agu 2026, 21.00 WIB"
                            badgeBg="bg-red-600 text-white"
                            link={urls.guidebookPenugasan}
                            isWide
                            bgColor="bg-yellow-200"
                            borderColor="border-yellow-500"
                            desc="WAJIB dikerjakan hari ini juga."
                        />
                    </div>

                    {/* TOP ROW: Full Width Evaluasi */}
                    <div className="animate-fade-in" style={{ animationDelay: '0ms' }}>
                        <ComicCard
                            title="Evaluasi Akhir"
                            badge=""
                            badgeBg="bg-emerald-600 text-white"
                            link="/evaluations"
                            rotate="rotate-1"
                            isWide
                            desc="All Training Evaluations"
                        />
                    </div>

                    {/* ROW 2: 2 Columns (Compact Height) */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div className="animate-fade-in" style={{ animationDelay: '50ms' }}>
                            <ComicCard
                                title="Regulasi"
                                badgeBg="bg-red-600 text-white"
                                link="/regulations"
                                rotate="rotate-0"
                                desc="Regulasi Orbits & Module"
                                isCompact
                            />
                        </div>

                        <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                            <ComicCard
                                title="Timeline"
                                badgeBg="bg-red-500 text-white"
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
                                title="Guidebook"
                                badge=""
                                badgeBg="bg-yellow-400"
                                link="/guidebooks"
                                rotate="-rotate-1"
                                isCompact
                                desc="View All"
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
                                badge=""
                                badgeBg="bg-yellow-400"
                                link="/interface"
                                rotate="-rotate-1"
                                isCompact
                                desc="View Links"
                            />
                        </div>
                    </div>

                    {/* ROW 4: 2 Columns (Compact Height) */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
                            <ComicCard
                                title="Briefing Day"
                                badge=""
                                badgeBg="bg-green-600 text-white"
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
                        <div className="animate-fade-in relative rounded-2xl bg-white border-3 border-black pt-4 p-2 sm:pt-6 sm:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
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
                    <div className="hidden animate-fade-in relative rounded-2xl bg-white border-3 border-black pt-4 p-2 sm:pt-6 sm:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
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
    bgColor = "bg-white",
    borderColor = "border-black",
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
            className={`group relative flex rounded-2xl ${bgColor} border-3 ${borderColor}
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
                        <h2 className="font-black uppercase tracking-tight text-black text-xs sm:text-sm group-hover:text-red-600 transition-colors">
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
                            <ChevronRight className="h-3 w-3 stroke-3" />
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
                            <ChevronRight className="h-3 w-3 stroke-3" />
                        </span>
                    </div>
                </>
            )}
        </div>
    );

    const isExternal = link?.startsWith("http://") || link?.startsWith("https://");

    if (isExternal) {
        return (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-inherit no-underline"
            >
                {content}
            </a>
        );
    }

    if (link) {
        return (
            <Link to={link} className="block w-full">
                {content}
            </Link>
        );
    }

    return (
        <div onClick={onClick} className="cursor-pointer w-full">
            {content}
        </div>
    );
}