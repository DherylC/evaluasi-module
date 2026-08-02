import { useEffect } from "react";
import { SunIcon, Astroid, Tornado } from "lucide-react";

export default function FlowPage() {

    useEffect(() => {
        document.title = "FLOW PPIF 2026";
    }, []);

    return (
        <div className="min-h-screen bg-amber-300 flex items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-yellow-400 selection:text-black">

            {/* Background Halftone Pattern / Comic Rays */}
            <div
                className="absolute inset-0 opacity-15 pointer-events-none animate-halftone"
                style={{
                    backgroundImage: 'radial-gradient(#000 2px, transparent 2px)',
                    backgroundSize: '16px 16px'
                }}
            />

            {/* Main Comic Panel Card */}
            <main className="mt-20 relative z-10 w-full max-w-2xl bg-white border-4 border-black rounded-3xl p-6 sm:p-10 mb-20 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-8 border-b-2 border-black border-dashed pb-8 flex flex-row items-center w-full justify-center gap-2 px-3 py-1 font-black text-xs uppercase tracking-widest animate-fade-in">
                    <Tornado className="w-12 h-12 fill-current text-black" />
                    <span className="font-black ml-4 text-2xl">Flow Briefing Day</span>
                </div>

                <div className="flex flex-col gap-12 animate-fade-in" style={{ animationDelay: "100ms" }}>

                    {/* Minimal YouTube Video Embed */}
                    <div className="w-full max-w-4xl mx-auto my-6">
                        <div className="relative w-full aspect-video rounded-2xl border-3 sm:border-4 border-black bg-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                            <iframe
                                src="https://www.youtube-nocookie.com/embed/gVbVVIT-zkA?controls=0&modestbranding=1&rel=0&disablekb=1"
                                title="YouTube video player"
                                className="absolute inset-0 w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    <div> {/* part 1 */}
                        <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-4">
                            <div className="flex items-center gap-2 bg-yellow-400 border-2 border-black px-3 py-1 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Astroid className="shrink-0 w-4 h-4 fill-current text-black" />Pembukaan Briefing Day di ZOOM
                            </div>
                        </div>

                        {/* Message Description */}
                        <p className="text-justify font text-gray-800 text-sm sm:text-base leading-relaxed">
                            Seluruh peserta, panitia, dan Orbits akan terlebih dahulu berkumpul di main room Zoom
                            untuk mengikuti Briefing Day PPIF 2026. Pada sesi awal ini, peserta akan diberikan
                            penjelasan seputar teknis acara, barang-barang yang wajib dibawa saat hari H, peraturan
                            umum, serta informasi penting lainnya agar seluruh peserta lebih siap mengikuti rangkaian
                            kegiatan nantinya. Setelah itu, acara dilanjutkan dengan sesi perkenalan divisi-divisi
                            kepanitiaan supaya mahasiswa baru dapat mengenal panitia yang akan mendampingi mereka
                            selama PPIF berlangsung.
                        </p>
                    </div>

                    <div> {/* part 2 */}
                        <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-4">
                            <div className="flex items-center gap-2 bg-yellow-400 border-2 border-black px-3 py-1 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Astroid className="shrink-0 w-4 h-4 fill-current text-black" />Penayangan Trailer Storyline Act 1: The Signal
                            </div>
                        </div>

                        {/* Message Description */}
                        <p className="text-justify font text-gray-800 text-sm sm:text-base leading-relaxed">
                            Setelah sesi formalitas selesai, acara akan masuk ke bagian utama dengan penayangan trailer
                            Act 1 The Signal yang ditonton bersama-sama di main room. Trailer ini menjadi pembuka
                            storyline PPIF 2026, di mana Orbits sebagai penjaga multiverse mendeteksi adanya
                            kerusakan besar pada Wooden Puppet Universe akibat penyebaran bad virus. Karena situasi
                            semakin darurat, seluruh Variants dari berbagai universe dipanggil untuk berkumpul dan
                            menjalankan misi penyelamatan. Namun, saat sinyal dikirim, data identitas para Variants ikut
                            terganggu sehingga identitas mereka belum dapat terbaca sepenuhnya.
                        </p>
                    </div>

                    <div> {/* part 3 */}
                        <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-4">
                            <div className="flex items-center gap-2 bg-yellow-400 border-2 border-black px-3 py-1 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Astroid className="shrink-0 w-4 h-4 fill-current text-black" />Breakout Room : Perkenalan Kelompok
                            </div>
                        </div>

                        {/* Message Description */}
                        <p className="text-justify font text-gray-800 text-sm sm:text-base leading-relaxed">
                            Setelah trailer selesai, seluruh peserta akan diarahkan masuk ke breakout room Zoom sesuai
                            kelompok sementara yang sebelumnya masih menggunakan nomor. Di dalam breakout room,
                            masing-masing kelompok akan didampingi oleh ketua kelompok dan module. Sesi diawali
                            dengan perkenalan singkat antaranggota kelompok agar peserta bisa mulai saling mengenal
                            dan suasana menjadi lebih cair.
                        </p>
                    </div>
                    <div> {/* part 4 */}
                        <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-4">
                            <div className="flex items-center gap-2 bg-yellow-400 border-2 border-black px-3 py-1 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Astroid className="shrink-0 w-4 h-4 fill-current text-black" />Bridging Menuju Aktivitas Pemecahan Nama Kelompok
                            </div>
                        </div>

                        {/* Message Description */}
                        <p className="text-justify font text-gray-800 text-sm sm:text-base leading-relaxed">
                            Setelah sesi perkenalan, ketua kelompok akan menjelaskan bahwa kelompok mereka
                            menerima sinyal dari Orbits yang belum sempurna. Akibat gangguan bad virus, identitas asli
                            kelompok masih terkunci di dalam sistem dan belum bisa terbaca. Oleh karena itu, seluruh
                            anggota kelompok harus bekerja sama untuk memulihkan data tersebut melalui serangkaian
                            challenge yang sudah disiapkan.
                        </p>
                    </div>
                    <div> {/* part 5 */}
                        <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-4">
                            <div className="flex items-center gap-2 bg-yellow-400 border-2 border-black px-3 py-1 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Astroid className="shrink-0 w-4 h-4 fill-current text-black" />Aktivitas Pemecahan Nama Kelompok
                            </div>
                        </div>

                        {/* Message Description */}
                        <p className="text-justify font text-gray-800 text-sm sm:text-base leading-relaxed">
                            Peserta akan diminta membuka website resmi PPIF 2026 dan masuk ke halaman khusus
                            proses aktivasi identitas kelompok. Saat halaman dibuka, akan muncul tampilan sistem error
                            dengan efek glitch dan peringatan bahwa data kelompok belum berhasil dipulihkan. Untuk
                            membuka identitas tersebut, peserta harus menyelesaikan tiga challenge yang sudah
                            disiapkan.

                            Setiap challenge yang berhasil diselesaikan akan memberikan beberapa fragmen huruf yang
                            menjadi bagian dari nama kelompok mereka. Seluruh anggota kelompok diharapkan aktif
                            berdiskusi, bekerja sama, dan menyelesaikan tantangan bersama-sama.
                        </p>
                    </div>
                    <div> {/* part 6 */}
                        <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-4">
                            <div className="flex items-center gap-2 bg-yellow-400 border-2 border-black px-3 py-1 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Astroid className="shrink-0 w-4 h-4 fill-current text-black" />Reveal Nama Kelompok
                            </div>
                        </div>

                        {/* Message Description */}
                        <p className="text-justify font text-gray-800 text-sm sm:text-base leading-relaxed">
                            Setelah ketiga challenge selesai, seluruh huruf yang sudah didapatkan harus disusun menjadi
                            nama kelompok asli mereka. Jika jawaban yang dimasukkan benar, sistem akan kembali
                            pulih dan identitas kelompok resmi terbuka. Nama universe masing-masing kelompok akan
                            muncul di layar sebagai identitas baru yang akan mereka gunakan selama rangkaian PPIF
                            2026 berlangsung.
                        </p>
                    </div>
                </div>

            </main>
        </div>
    );
}