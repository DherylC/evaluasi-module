import React, { useEffect } from "react";

const REGULATION_SECTIONS = [
    {
        title: "REGULASI MODULE",
        cards: [
            {
                id: 1,
                fullWidth: false,
                rule: "Mengikuti Rangkaian dengan penuh semangat.",
            },
            {
                id: 2,
                fullWidth: false,
                rule: "Patuhi Regulasi Orbits dan arahan Divisi lain.",
            },
            {
                id: 3,
                fullWidth: true,
                rule: "Tidak boleh bersifat senioritas. Gunakan kata ganti: “aku”, “kamu”, “teman-teman”",
            },
        ],
    },
    {
        title: "REGULASI ORBITS",
        cards: [
            {
                id: 4,
                fullWidth: false,
                rule: "WAJIB menggunakan KTM selama Rangkaian maupun bertugas.",
                consequence: "Konsekuensi: Ditegur dan diminta untuk menggunakan.",
            },
            {
                id: 5,
                fullWidth: false,
                rule: "WAJIB menggunakan pakaian sesuai dengan peraturan Divisi dan peraturan kampus.",
                consequence: "Konsekuensi: Dicatat.",
            },
            {
                id: 6,
                fullWidth: false,
                rule: "WAJIB mencatat seluruh hal-hal penting yang disampaikan di rapat divisi dan pleno.",
                consequence: "Konsekuensi: Ditegur dan diminta catat bagian yang kurang.",
            },
            {
                id: 7,
                fullWidth: false,
                rule: "WAJIB bertutur kata dan menggunakan gestur tubuh yang baik.",
                consequence: "Konsekuensi: Ditegur oleh Koordinator.",
            },
            {
                id: 8,
                fullWidth: true,
                rule: "DILARANG menggunakan perhiasan, nail art dan make up termasuk softlens dengan warna yang menonjol.",
                consequence: "Konsekuensi: Dicatat dan diminta melepas perhiasaan serta menghapus makeup tersebut.",
            },
            {
                id: 9,
                fullWidth: true,
                rule: "Bagi yang memiliki tato, WAJIB menutupinya selama kegiatan berlangsung.",
                consequence: "Penutupan dapat menggunakan manset, pakaian berlengan panjang, atau penutup lain yang sopan dan sesuai.",
            },
            {
                id: 10,
                fullWidth: false,
                rule: "Taati peraturan kampus yang berlaku.",
                consequence: "Konsekuensi: Disesuaikan dengan aturan kampus yang berlaku.",
            },
            {
                id: 11,
                fullWidth: false,
                rule: "WAJIB menghadiri seluruh rangkaian PPIF mulai dari rapat, simulasi, gladi hingga hari-H.",
                consequence: "Konsekuensi: Dicatat dan ditegur oleh koordinator divisi masing masing.",
            },
            {
                id: 12,
                fullWidth: false,
                rule: "DILARANG melakukan kekerasan seksual maupun verbal.",
                consequence: "Konsekuensi: Dilaporkan kepada pihak berwajib.",
            },
            {
                id: 13,
                fullWidth: false,
                rule: "WAJIB menggunakan jam tangan analog atau digital.",
                consequence: "Penggunaan smartwatch tidak diperbolehkan.",
            },
            {
                id: 14,
                fullWidth: false,
                rule: "DILARANG mencoreng nama baik PPIF dan Universitas Multimedia Nusantara.",
                consequence: "Konsekuensi: Dilaporkan ke pihak berwajib.",
            },
            {
                id: 15,
                fullWidth: false,
                rule: "DILARANG mengunggah apapun yang berkaitan dengan PPIF 2026.",
                consequence: "Konsekuensi: Ditegur oleh koor divisi yang berkaitan dan harus menghapus unggahan yang telah di posting.",
            },
            {
                id: 16,
                fullWidth: true,
                rule: "Selama rangkaian kegiatan PPIF 2026 berlangsung, seluruh panitia DILARANG merokok atau menggunakan vape, mengonsumsi minuman keras, maupun narkoba.",
                consequence: "Konsekuensi: Dilaporkan kepada pihak berwajib.",
            },
            {
                id: 17,
                fullWidth: false,
                rule: "Rambut panjang WAJIB diikat atau menggunakan bando.",
                consequence: "Bando atau ikat rambut harus berwarna hitam polos, tidak bermotif, dan tidak beraksesoris.",
            },
            {
                id: 18,
                fullWidth: false,
                rule: "WAJIB bertanggung jawab atas dirinya dan divisi yang dipegang.",
                consequence: "Konsekuensi: Ditegur oleh koordinator divisi masing masing.",
            },
            {
                id: 19,
                fullWidth: true,
                rule: "WAJIB menjaga kondusivitas dan ketertiban selama acara PPIF berlangsung.",
            },
        ],
    },
    /*
    {
        title: "REGULASI VARIANTS",
        cards: [
            {
                id: 7,
                fullWidth: true,
                rule: "Stay tuned.",
                consequence: "orang baik harus sabar :)",
            }
        ],
    },
    */
];

export default function RegulationsPage() {
    useEffect(() => {
        document.title = "Regulations";
    }, []);

    return (
        <div className=" select-none min-h-screen bg-[#b80000] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden font-sans selection:bg-yellow-400 selection:text-black">
            {/* Background Halftone Pattern / Comic Rays */}
            <div
                className="absolute inset-0 opacity-15 pointer-events-none animate-halftone"
                style={{
                    backgroundImage: "radial-gradient(#000 2px, transparent 2px)",
                    backgroundSize: "16px 16px",
                }}
            />

            <div className="w-full max-w-2xl space-y-20 z-10 pt-24 pb-20">
                {REGULATION_SECTIONS.map((section, idx) => (
                    <section key={idx} className="space-y-6">
                        {/* Comic Header Title */}
                        <div className="text-center">

                            <h1 className="animate-fade-in py-2 text-4xl sm:text-5xl md:text-5xl -rotate-1 font-black italic uppercase text-white tracking-tight drop-shadow-[2px_4px_0px_rgba(0,0,0,1)] [-webkit-text-stroke:1.5px_black]">
                                {section.title}
                            </h1>


                        </div>

                        {/* Cards Grid */}
                        <div className="grid sm:grid-cols-2 gap-4" >
                            {section.cards.map((card) => {
                                const widthClass = card.fullWidth ? "sm:col-span-2" : "col-span-1";
                                const delay = `${card.id * 50}ms`;

                                // Check if this card has a consequence block
                                const hasConsequence = Boolean(card.consequence);

                                return (
                                    <div
                                        key={card.id}
                                        className={`animate-fade-in bg-white border-3 border-black rounded-2xl p-5 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 flex flex-col justify-between text-zinc-900 ${widthClass}`}
                                        style={{ animationDelay: delay }}
                                    >
                                        {/* Main Text Content */}
                                        <p className="text-base sm:text-md font-extrabold">
                                            {card.content || card.rule}
                                        </p>

                                        {/* Consequence Section (Only rendered if card.consequence exists) */}
                                        {hasConsequence && (
                                            <div className="pt-3 mt-4 border-t-2 border-black">
                                                <span className="inline-block text-[12px] font-mono">
                                                    note:
                                                </span>
                                                <p className="text-[12px] font-bold text-[#b80000] leading-tight">
                                                    {card.consequence}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}