import { useEffect } from "react";
import { Sparkles, Zap, Tornado, Triangle, Cross, Hexagon, Astroid, Skull } from "lucide-react";
import Navigator from "../components/Navigator";

export default function StorylinePage() {

    useEffect(() => {
        document.title = "STORYLINE PPIF 2026";
    }, []);

    return (
        <div className="min-h-screen bg-amber-300 flex items-center justify-center px-4 pt-4 pb-24 relative overflow-hidden font-sans selection:bg-yellow-400 selection:text-black">

            {/* Background Halftone Pattern / Comic Rays */}
            <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#000 2px, transparent 2px)',
                    backgroundSize: '16px 16px'
                }}
            />

            {/* Main Comic Panel Card */}
            <main className="mt-20 relative z-10 w-full max-w-2xl bg-white border-4 border-black rounded-3xl p-6 sm:p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-8 border-b-2 border-black border-dashed pb-8 flex flex-row items-center w-full justify-center gap-2 px-3 py-1 font-black text-xs uppercase tracking-widest">
                    <Sparkles className="w-12 h-12 text-black" />
                    <span className="font-black ml-4 text-2xl">Storyline PPIF 2026</span>
                </div>

                <div className="flex flex-col gap-16">
                    <div id="story-act-1"> {/* STORYLINE ACT 1 BRIEFING DAY */}
                        <div className="flex flex-row items-baseline justify-between border-b-4 border-black pb-4 mb-4">
                            <div className="flex items-center gap-2 bg-yellow-400 border-2 border-black px-3 py-1 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Astroid className="w-4 h-4 fill-current text-black" /> Story ACT 1
                            </div>
                            <div className="flex text-right font-black text-xs uppercase tracking-widest">
                                Briefing Day
                            </div>
                        </div>

                        {/* Message Description */}
                        <div className="flex flex-col gap-4 text-justify font text-gray-800 text-sm sm:text-base leading-relaxed">
                            <span>
                                Di dalam multiverse, terdapat sebuah universe paling tua, paling stabil, dan paling maju
                                bernama Light Universe. Karena kestabilannya, tempat ini dijadikan pusat pengamatan
                                seluruh multiverse oleh sebuah sistem bernama Orbits. Tugas Orbits adalah mengawasi setiap
                                perubahan yang terjadi di seluruh universe dan menjaga keseimbangannya.
                            </span>

                            <span>
                                Suatu hari, salah satu universe perlahan kehilangan cahaya, pergerakan di dalamnya mulai
                                berhenti, dan seluruh sistem terasa seperti sedang runtuh dari dalam. Setelah diamati,
                                universe yang sedang terancam adalah Wooden Puppet Universe. Orbits pun mulai
                                mengamati universe tersebut dan menemukan virus berbahaya yang mereka sebut bad virus.
                            </span>

                            <span>
                                Bad virus bukan ancaman yang menyerang secara langsung, melainkan tumbuh dari rasa
                                takut, malas, ragu, dan keengganan untuk bergerak maju. Demikian pula, Orbits juga
                                menyadari bahwa Variants yang tinggal di Wooden Puppet Universe mulai menyerah,
                                berhenti berkembang, dan kehilangan arah. Dari keadaan itulah bad virus menyebar semakin
                                kuat ke seluruh universe tersebut.
                            </span>

                            <span>
                                Di tengah kekacauan itu, Codie Puppet sebagai pemandu Wooden Puppet Universe berusaha
                                mempertahankan semuanya seorang diri. Ia terus memandu para Variants agar tetap bergerak,
                                namun karena terlalu lama berjuang sendirian, Codie Puppet akhirnya ikut terinfeksi bad
                                virus. Sejak saat itu, Wooden Puppet Universe kehilangan arah sepenuhnya dan mulai runtuh.
                            </span>

                            <span>
                                Melihat ancaman ini semakin besar, Orbits segera mencari solusi dan menemukan resep kuno
                                berupa antibiotik yang mampu melawan bad virus. Antibiotik tersebut hanya bisa dibuat
                                dengan mengumpulkan tiga batu inti, yaitu Hope Stone, Change Stone, dan Commitment
                                Stone, yang tersebar di tiga universe berbeda.
                            </span>

                            <span>
                                Untuk menjalankan misi tersebut, Orbits mengirim signal ke seluruh multiverse dan
                                memanggil para Variants dari berbagai universe untuk berkumpul. Namun, saat signal
                                dikirim, sistem mengalami gangguan sehingga data identitas para Variants ikut terpecah dan
                                belum dapat dikenali sepenuhnya.
                            </span>


                            <span>
                                Karena itu, sebelum misi penyelamatan dimulai, para Variants harus memulihkan identitas
                                mereka terlebih dahulu. Melalui aktivitas pemecahan nama kelompok, peserta akan
                                mengumpulkan fragmen data yang hilang untuk mengetahui universe asal dan identitas
                                kelompok mereka masing-masing. Setelah identitas berhasil dipulihkan, barulah perjalanan
                                menuju misi utama dapat dimulai.
                            </span>
                        </div>
                    </div>

                    <div id="story-prolog"> {/* STORYLINE PROLOG D-DAY */}
                        <div className="flex flex-row items-baseline justify-between border-b-4 border-black pb-4 mb-4">
                            <div className="flex items-center gap-2 bg-yellow-400 border-2 border-black px-3 py-1 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Astroid className="w-4 h-4 fill-current text-black" /> PROLOG
                            </div>
                            <div className="flex text-right font-black text-xs uppercase tracking-widest">
                                D-DAY (2 Min)
                            </div>
                        </div>

                        {/* Message Description */}
                        <div className="flex flex-col gap-4 text-justify font text-gray-800 text-sm sm:text-base leading-relaxed">
                            <span>
                                Setelah Orbits menyadari kemunculan Bad Virus dan memperoleh resep antibiotik
                                yang dapat melawan Bad Virus, ia menyebarkan panggilan ke seluruh multiverse. Variants
                                dari berbagai universe dipanggil untuk berkumpul. Satu per satu mereka datang, dari universe
                                yang berbeda, dengan latar belakang yang berbeda, tapi dengan satu tujuan yang sama, yaitu
                                menyelamatkan Wooden Puppet Universe.
                            </span>

                            <span>
                                Di hadapan seluruh Variants yang berkumpul, Orbits menyampaikan briefing dengan
                                jelas. Tiga batu harus dikumpulkan dari tiga universe berbeda. Perjalanan dimulai dari Hope
                                Universe, lalu Change Universe, dan terakhir Commitment Universe. Setelah ketiga batu
                                terkumpul, mereka baru bisa masuk ke Wooden Puppet Universe. Variants mendengarkan.
                                Dan ketika Orbits selesai berbicara, tidak ada yang mundur.
                            </span>
                        </div>
                    </div>

                    <div id="quiz-prolog"> {/* QUIZ PROLOG */}
                        <div className="flex flex-row items-baseline justify-between border-b-4 border-black pb-4 mb-4">
                            <div className="flex items-center gap-2 bg-yellow-400  text-black border-2 border-black px-3 py-1 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Astroid className="w-4 h-4 fill-current text-black" /> QUIZ PROLOG
                            </div>
                            <div className="flex text-right font-black text-xs uppercase tracking-widest">
                                D-DAY (2 Min)
                            </div>
                        </div>

                        {/* Message Description / Question */}
                        <div className="flex flex-col gap-4 font text-gray-800 text-sm sm:text-base leading-relaxed">
                            <p className="font-extrabold text-black text-base sm:text-lg">
                                Universe mana yang ingin diselamatkan oleh Variants?
                            </p>

                            {/* Multiple Choice Options */}
                            <div className="flex flex-col gap-2 mt-1">

                                {/* Option A */}
                                <div className="flex items-center gap-3 p-2.5 rounded-lg border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
                                    <span className="flex items-center justify-center w-6 h-6 rounded bg-neutral-100 border border-black text-xs font-black">A</span>
                                    <span>Hope Universe</span>
                                </div>

                                {/* Option B (HIGHLIGHTED CORRECT ANSWER) */}
                                <div className="flex items-center justify-between p-2.5 rounded-lg border-2 border-black bg-emerald-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-extrabold text-black">
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center justify-center w-6 h-6 rounded bg-black text-emerald-300 text-xs font-black">B</span>
                                        <span>Wooden Puppet Universe</span>
                                    </div>
                                    <span className="text-xs text-right bg-black text-white px-2 py-0.5 rounded font-black tracking-wider uppercase border border-black">
                                        Jawaban Tepat
                                    </span>
                                </div>

                                {/* Option C */}
                                <div className="flex items-center gap-3 p-2.5 rounded-lg border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
                                    <span className="flex items-center justify-center w-6 h-6 rounded bg-neutral-100 border border-black text-xs font-black">C</span>
                                    <span>Light Universe</span>
                                </div>

                                {/* Option D */}
                                <div className="flex items-center gap-3 p-2.5 rounded-lg border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
                                    <span className="flex items-center justify-center w-6 h-6 rounded bg-neutral-100 border border-black text-xs font-black">D</span>
                                    <span>Commitment Universe</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div id="story-1"> {/* STORYLINE 1 */}
                        <div className="flex flex-row items-baseline justify-between border-b-4 border-black pb-4 mb-4">
                            <div className="flex items-center gap-2 bg-cyan-700 text-white border-2 border-black px-3 py-1 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Triangle className="w-4 h-4 fill-current text-white" /> CHAPTER 1: HOPE
                            </div>
                            <div className="flex text-right font-black text-xs uppercase tracking-widest">
                                D-DAY (2 Min)
                            </div>
                        </div>

                        {/* Message Description */}
                        <div className="flex flex-col gap-4 text-justify font text-gray-800 text-sm sm:text-base leading-relaxed">
                            <span>
                                Universe pertama yang kalian kunjungi adalah Hope Universe. Tempat itu gelap,
                                namun bukan gelap biasa, melainkan kegelapan total. Tidak ada cahaya, petunjuk arah, dan
                                kepastian bahwa langkah kalian benar. Di tengah kegelapan itu, muncul satu cahaya yang
                                hangat. Pancaran itu berasal dari Codie dari Hope Universe. Tubuhnya terus bersinar
                                layaknya seseorang yang tidak pernah kehilangan harapan. Ia hanya berkata pelan, “Jalannya
                                ada, meski kalian tidak bisa melihatnya,” dan para Variants mulai berjalan.
                            </span>

                            <span>
                                Selagi Codie memimpin Variants, ia memberikan arahan, “Di depan kalian, muncul
                                titik-titik cahaya kecil. Ada yang dekat dan aman. Ada yang jauh, hampir tenggelam dalam
                                gelap. Tidak ada yang tahu mana yang benar. Tidak ada jaminan kalian akan berhasil. Yang
                                ada hanya satu pertanyaan: seberapa jauh kalian berani melangkah ke dalam kegelapan”.
                                Beberapa memilih cahaya yang dekat, tapi beberapa lainnya terus berjalan lebih jauh. Jauh
                                menuju tempat paling gelap, di mana bisikan Bad Virus terdengar paling kuat.
                            </span>
                            <div className="flex items-center gap-4 bg-cyan-700 text-white border-2 border-black px-3 py-4 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Triangle className="w-4 h-4 fill-current text-white" /> Variants beraktivitas selama durasi (20 menit)
                            </div>
                            <div className="flex items-center gap-4 bg-cyan-700 text-white border-2 border-black px-3 py-4 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Triangle className="w-4 h-4 fill-current text-white" /> Variants yang unggul mendapat print-out Hope Stone
                            </div>
                        </div>
                    </div>

                    <div id="quiz-1"> {/* QUIZ 1 */}
                        <div className="flex flex-row items-baseline justify-between border-b-4 border-black pb-4 mb-4">
                            <div className="flex items-center gap-2 bg-cyan-700 text-white border-2 border-black px-3 py-1 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Triangle className="w-4 h-4 fill-current text-white" /> QUIZ 1
                            </div>
                            <div className="flex text-right font-black text-xs uppercase tracking-widest">
                                D-DAY (2 Min)
                            </div>
                        </div>

                        {/* Message Description / Question */}
                        <div className="flex flex-col gap-4 font text-gray-800 text-sm sm:text-base leading-relaxed">
                            <p className="font-extrabold text-black text-base sm:text-lg">
                                Siapa yang memancarkan cahaya hangat di Hope Universe?
                            </p>

                            {/* Multiple Choice Options */}
                            <div className="flex flex-col gap-2 mt-1">

                                {/* Option A */}
                                <div className="flex items-center gap-3 p-2.5 rounded-lg border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
                                    <span className="flex items-center justify-center w-6 h-6 rounded bg-neutral-100 border border-black text-xs font-black">A</span>
                                    <span>Orbits</span>
                                </div>

                                {/* Option C */}
                                <div className="flex items-center gap-3 p-2.5 rounded-lg border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
                                    <span className="flex items-center justify-center w-6 h-6 rounded bg-neutral-100 border border-black text-xs font-black">B</span>
                                    <span>Bad Virus</span>
                                </div>

                                {/* Option D */}
                                <div className="flex items-center gap-3 p-2.5 rounded-lg border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
                                    <span className="flex items-center justify-center w-6 h-6 rounded bg-neutral-100 border border-black text-xs font-black">C</span>
                                    <span>Variants</span>
                                </div>

                                {/* Option B (HIGHLIGHTED CORRECT ANSWER) */}
                                <div className="flex items-center justify-between p-2.5 rounded-lg border-2 border-black bg-emerald-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-extrabold text-black">
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center justify-center w-6 h-6 rounded bg-black text-emerald-300 text-xs font-black">D</span>
                                        <span>Codie</span>
                                    </div>
                                    <span className="text-xs text-right bg-black text-white px-2 py-0.5 rounded font-black tracking-wider uppercase border border-black">
                                        Jawaban Tepat
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div id="story-2"> {/* STORYLINE 2 */}
                        <div className="flex flex-row items-baseline justify-between border-b-4 border-black pb-4 mb-4">
                            <div className="flex items-center gap-2 bg-orange-600 text-white border-2 border-black px-3 py-1 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Cross className="w-4 h-4 fill-current text-white" /> CHAPTER 2: Change
                            </div>
                            <div className="flex text-right font-black text-xs uppercase tracking-widest">
                                D-DAY (2 Min)
                            </div>
                        </div>

                        {/* Message Description */}
                        <div className="flex flex-col gap-4 text-justify font text-gray-800 text-sm sm:text-base leading-relaxed">
                            <span>
                                Dari berbagai jalan yang dipilih tersebut, cahaya kecil tadi perlahan hidup satu per
                                satu, seperti kunang-kunang yang mengeluarkan cahaya di malam hari. Variants bergerak
                                mendekat, dan di tengah cahaya itu, munculah Batu Hope. Batu itu bersinar terang, berwarna
                                biru lembut, dan hangat. Akhirnya, Variants pun mengambilnya dan universe kedua telah
                                terbuka, yaitu Change Universe.
                            </span>

                            <span>
                                Berbeda dengan sebelumnya, tempat ini terlalu terang dan terlalu ramai. Tetapi ada
                                yang aneh: setiap langkah mengubah segalanya. Jembatan menghilang, tangga berbalik arah,
                                pintu yang awalnya terbuka tiba-tiba tertutup rapat. Tidak ada yang tetap di universe ini;
                                semuanya terus berubah. Variants pun tidak berani melangkahkan kaki mereka, namun
                                seketika Codie dari Universe Change mendatangi Variants dan berkata, “Menunggu keadaan
                                sempurna adalah kesalahan terbesar, karena keadaan sempurna tidak akan pernah datang.”.
                            </span>

                            <span>
                                Mendengar perkataan tersebut, Variants mulai berjalan. Langkah pertama terasa
                                aman; langkah kedua, dunia di depan kalian berubah. Jalan yang tadi ada menghilang. Aturan
                                berubah tanpa peringatan. Di tengah kekacauan itu, Orbits mengirim satu pesan. Pesan itu
                                harus diteruskan dari satu Variant ke Variant berikutnya sampai ke ujung perjalanan. Tapi
                                universe ini tidak mempermudah apa pun. Terkadang Variants harus berbicara sambil terus
                                berjalan, terkadang hanya boleh berbisik dalam satu napas, dan terkadang pula jalur lurus
                                tiba-tiba berputar dan memaksa kalian mengulang semuanya dari awal. Beberapa mulai panik
                                dan ada yang kehilangan kata-kata di tengah jalan.
                            </span>
                            <div className="flex items-center gap-4 bg-orange-600 text-white border-2 border-black px-3 py-4 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Cross className="w-4 h-4 fill-current text-white" /> Variants beraktivitas selama durasi (20 menit)
                            </div>
                            <div className="flex items-center gap-4 bg-orange-600 text-white border-2 border-black px-3 py-4 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Cross className="w-4 h-4 fill-current text-white" /> Variants yang unggul mendapat print-out Change Stone
                            </div>
                        </div>
                    </div>

                    <div id="quiz-2"> {/* QUIZ 2 */}
                        <div className="flex flex-row items-baseline justify-between border-b-4 border-black pb-4 mb-4">
                            <div className="flex items-center gap-2 bg-orange-600 text-white border-2 border-black px-3 py-1 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Cross className="w-4 h-4 fill-current text-white" /> QUIZ 2
                            </div>
                            <div className="flex text-right font-black text-xs uppercase tracking-widest">
                                D-DAY (2 Min)
                            </div>
                        </div>

                        {/* Message Description / Question */}
                        <div className="flex flex-col gap-4 font text-gray-800 text-sm sm:text-base leading-relaxed">
                            <p className="font-extrabold text-black text-base sm:text-lg">
                                Apa yang dikatakan Codie dari Universe Change?
                            </p>

                            {/* Multiple Choice Options */}
                            <div className="flex flex-col gap-2 mt-1">

                                {/* Option A */}
                                <div className="flex items-center gap-3 p-2.5 rounded-lg border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
                                    <span className="flex items-center justify-center w-6 h-6 rounded bg-neutral-100 border border-black text-xs font-black">A</span>
                                    <span>Kesalahan terbesar adalah berjalan di universe ini</span>
                                </div>

                                {/* Option C */}
                                <div className="flex items-center gap-3 p-2.5 rounded-lg border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
                                    <span className="flex items-center justify-center w-6 h-6 rounded bg-neutral-100 border border-black text-xs font-black">B</span>
                                    <span>Keadaan sempurna dapat ditunggu dan akan datang</span>
                                </div>

                                {/* Option B (HIGHLIGHTED CORRECT ANSWER) */}
                                <div className="flex items-center justify-between p-2.5 rounded-lg border-2 border-black bg-emerald-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-extrabold text-black">
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center justify-center w-6 h-6 rounded bg-black text-emerald-300 text-xs font-black">C</span>
                                        <span>Keadaan sempurna tidak akan pernah datang</span>
                                    </div>
                                    <span className="text-xs text-right bg-black text-white px-2 py-0.5 rounded font-black tracking-wider uppercase border border-black">
                                        Jawaban Tepat
                                    </span>
                                </div>

                                {/* Option D */}
                                <div className="flex items-center gap-3 p-2.5 rounded-lg border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
                                    <span className="flex items-center justify-center w-6 h-6 rounded bg-neutral-100 border border-black text-xs font-black">D</span>
                                    <span>Aturan akan berubah tanpa peringatan</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div id="story-3"> {/* STORYLINE 3 */}
                        <div className="flex flex-row items-baseline justify-between border-b-4 border-black pb-4 mb-4">
                            <div className="flex items-center gap-2 bg-emerald-600 text-white border-2 border-black px-3 py-1 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Hexagon className="w-4 h-4 fill-current text-white" /> Chapter 3: Commitment
                            </div>
                            <div className="flex text-right font-black text-xs uppercase tracking-widest">
                                D-DAY (2 Min)
                            </div>
                        </div>

                        {/* Message Description */}
                        <div className="flex flex-col gap-4 text-justify font text-gray-800 text-sm sm:text-base leading-relaxed">
                            <span>
                                Pesan yang dikirimkan terus bergerak, dari mulut ke telinga berurutan tanpa berhenti,
                                melewati setiap perubahan yang mencoba menghentikan Variants. Akhirnya, pesan tersebut
                                sampai ke Variant yang paling ujung. Meskipun pesan yang diterima tidak sempurna, namun
                                masih bisa dikenali sehingga Change Universe tiba-tiba berhenti dan sunyi. Di tengah
                                keheningan tersebut, Batu Change menampakkan dirinya. Batu itu bersinar hangat, berwarna
                                oranye, memiliki permukaan yang terus bergerak seperti api kecil yang tidak padam. Dengan
                                begitu, Variants mengambilnya dan universe ketiga pun terbuka: Commitment Universe.
                            </span>

                            <span>
                                Variants pun memasuki Commitment Universe. Suasana di sini sunyi dan tenang,
                                tidak ada kegelapan maupun kekacauan seperti universe sebelumnya. Ternyata setelah
                                diamati lebih lanjut, di setiap sudut dari universe tersebut, ada sesuatu yang memperhatikan
                                Variants. Sosok-sosok itu berbentuk sama persis seperti Variants. Codie dari Universe
                                Commitment muncul di antara mereka dan berkata pelan, “Satu-satunya cara melewati
                                tempat ini adalah mengingat kenapa kalian memulai. Bukan karena perjalanan ini mudah.
                                Tapi karena ada sesuatu yang lebih penting daripada rasa nyaman.”.
                            </span>

                            <span>
                                Variants pun mulai berjalan. Di depan hanya ada satu jalur lurus dan sederhana, dan di
                                ujung jalur itu terdapat Batu Commitment yang berdiri diam. Kelihatannya mudah, hingga
                                sosok bayangan tadi mulai berbicara. Kalian tidak menyerang, namun hanya berbisik dengan
                                suara yang sama seperti pikiran kalian sendiri. “Kamu sudah cukup.”, “Tidak apa-apa
                                berhenti.”, “Tujuanmu tidak sebanding dengan usahanya.” Suara-suara tersebut terus
                                bermunculan selagi Variants melangkah. Satu per satu, Variants mulai goyah. Langkah
                                mereka melambat dan pandangan kalian mulai kabur.
                            </span>
                            <div className="flex text-start items-center gap-4 bg-emerald-600 text-white border-2 border-black px-3 py-4 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Hexagon className="w-4 h-4 fill-current text-white" /> Variants beraktivitas selama durasi (20 menit)
                            </div>
                            <div className="flex items-center gap-4 bg-emerald-600 text-white border-2 border-black px-3 py-4 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Hexagon className="w-4 h-4 fill-current text-white" /> Variants yang unggul mendapat print-out Commitment Stone
                            </div>
                        </div>
                    </div>

                    <div id="quiz-3"> {/* QUIZ 3 */}
                        <div className="flex flex-row items-baseline justify-between border-b-4 border-black pb-4 mb-4">
                            <div className="flex items-center gap-2 bg-emerald-600 text-white border-2 border-black px-3 py-1 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Hexagon className="w-4 h-4 fill-current text-white" /> QUIZ 3
                            </div>
                            <div className="flex text-right font-black text-xs uppercase tracking-widest">
                                D-DAY (2 Min)
                            </div>
                        </div>

                        {/* Message Description / Question */}
                        <div className="flex flex-col gap-4 font text-gray-800 text-sm sm:text-base leading-relaxed">
                            <p className="font-extrabold text-black text-base sm:text-lg">
                                Bagaimana suasana Commitment Universe?
                            </p>

                            {/* Multiple Choice Options */}
                            <div className="flex flex-col gap-2 mt-1">

                                {/* Option B (HIGHLIGHTED CORRECT ANSWER) */}
                                <div className="flex items-center justify-between p-2.5 rounded-lg border-2 border-black bg-emerald-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-extrabold text-black">
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center justify-center w-6 h-6 rounded bg-black text-emerald-300 text-xs font-black">A</span>
                                        <span>Sunyi</span>
                                    </div>
                                    <span className="text-xs bg-black text-right text-white px-2 py-0.5 rounded font-black tracking-wider uppercase border border-black">
                                        Jawaban Tepat
                                    </span>
                                </div>

                                {/* Option A */}
                                <div className="flex items-center gap-3 p-2.5 rounded-lg border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
                                    <span className="flex items-center justify-center w-6 h-6 rounded bg-neutral-100 border border-black text-xs font-black">B</span>
                                    <span>Kacau</span>
                                </div>

                                {/* Option C */}
                                <div className="flex items-center gap-3 p-2.5 rounded-lg border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
                                    <span className="flex items-center justify-center w-6 h-6 rounded bg-neutral-100 border border-black text-xs font-black">C</span>
                                    <span>Bising</span>
                                </div>

                                {/* Option D */}
                                <div className="flex items-center gap-3 p-2.5 rounded-lg border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
                                    <span className="flex items-center justify-center w-6 h-6 rounded bg-neutral-100 border border-black text-xs font-black">D</span>
                                    <span>Gelap</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div id="story-bf"> {/* STORYLINE POST 3 */}
                        <div className="flex flex-row items-baseline justify-between border-b-4 border-black pb-4 mb-4">
                            <div className="flex items-center gap-2 bg-yellow-400 border-2 border-black px-3 py-1 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Astroid className="w-4 h-4 fill-current text-black" /> Storyline Post Chapter 3
                            </div>
                            <div className="flex text-right font-black text-xs uppercase tracking-widest">
                                D-DAY (10-12 Min)
                            </div>
                        </div>

                        {/* Message Description */}
                        <div className="flex flex-col gap-6 text-justify font text-gray-800 text-sm sm:text-base leading-relaxed">
                            <span>
                                Di ujung perjuangan, mereka mengabaikan bisikan-bisikan tersebut. Variants pun
                                akhirnya semakin sadar bahwa selama ini mereka berjalan sambil melihat bayangan mereka
                                sendiri, bukan melihat tujuan di ujung jalur. Mereka berhenti mendengarkan dan terus
                                melangkah maju. Perlahan-lahan, bayangan itu kehilangan kekuatannya. Akhirnya, Variants
                                berhasil sampai di ujung jalur di mana batu Commitment berdiri kokoh. Batu itu berwarna
                                hijau tua dan berat. Variants pun mengambil batu terakhir dan kini batu telah lengkap
                                diperoleh: Batu Hope, Batu Change, dan Batu Commitment. Variants pun menyatukan
                                ketiganya.
                            </span>
                            <div className="flex items-center gap-4 bg-yellow-400 border-2 border-black px-3 py-4 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Astroid className="w-4 h-4 fill-current text-black" /> Variants menyusun Hope Stone, Change Stone, dan Commitment Stone
                            </div>

                            <span>
                                Tiga batu bercahaya tersebut menyatu menjadi satu dan lahirlah antibiotik yang dapat
                                menghancurkan Bad Virus. Tidak ada satu pun yang bersorak, karena perjalanan sebenarnya
                                baru dimulai. Disinilah, Variants memasuki Wooden Puppet Universe.
                                Universe ini sunyi, redup, dan di tengahnya terdapat Codie Puppet yang berdiri,
                                bukan sebagai pemandu, melainkan sebagai sosok yang sudah dikuasai Bad Virus
                                sepenuhnya. Dan tanpa lama lagi, Codie Puppet mulai menyerang Variants.
                            </span>
                        </div>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-red-600 text-yellow-300 border-3 border-black px-4 py-2 font-black text-sm sm:text-base uppercase tracking-tight shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                        <span className="w-3 h-3 rounded-full bg-yellow-400 animate-ping" />
                        <span>BOSS FIGHT IN PROGRESS</span>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-emerald-400 text-black border-3 border-black px-4 py-2 font-black text-sm sm:text-base uppercase tracking-tight shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-1">
                        <Astroid className="w-3 h-3 fill-black" />
                        <span>BATTLE VICTORY</span>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-emerald-400 text-black border-3 border-black px-4 py-2 font-black text-sm sm:text-base uppercase tracking-tight shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                        <Astroid className="w-3 h-3 fill-black" />
                        <span>BATTLE VICTORY</span>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-red-600 text-yellow-300 border-3 border-black px-4 py-2 font-black text-sm sm:text-base uppercase tracking-tight shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                        <Skull className="w-6 h-6" />
                        <span>BATTLE DEFEAt</span>
                    </div>

                    <div id="story-end"> {/* STORYLINE EPILOG */}
                        <div className="flex flex-row items-baseline justify-between border-b-4 border-black pb-4 mb-4">
                            <div className="flex items-center gap-2 bg-yellow-400 border-2 border-black px-3 py-1 font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Astroid className="w-4 h-4 fill-current text-black" /> Storyline EPILOG
                            </div>
                            <div className="flex text-right font-black text-xs uppercase tracking-widest">
                                D-DAY (2 Min)
                            </div>
                        </div>

                        {/* Message Description */}
                        <div className="flex flex-col gap-6 text-justify font text-gray-800 text-sm sm:text-base leading-relaxed">
                            <span>
                                Variants mulai goyah, hampir jatuh, dan hampir menyerah hingga sesuai terjadi.
                                Codie Puppet berhenti menyerang. Ternyata, masih ada sisa dirinya yang dulu yang masih
                                percaya akan harapan. Dari dalam diri Codie Puppet, ia melawan Bad Virus. Mengetahui hal
                                tersebut, Orbits memberi tanda, “Sekarang!”. Variants pun bergerak dan memberikan
                                antibiotik tersebut kepada seluruh Variants di Wooden Puppet Universe.
                            </span>

                            <span>
                                Perlahan, universe itu berubah. Mata yang kosong mulai hidup kembali, cahaya yang
                                redup mulai menyala, dan Bad Virus mulai menghilang. Virus itu kehilangan tempat untuk
                                hidup dan memberikan kehidupan bagi Wooden Puppet Universe. Codie Puppet pun berdiri
                                di tengah semuanya, bukan sebagai ancaman, melainkan sebagai sosok yang akhirnya tidak
                                sendirian lagi. Dari seluruh perjalanan tersebut, Variants memahami satu hal: rasa takut, ragu,
                                dan malas itu nyata, tapi tidak menjadi alasan untuk berhenti melangkah. Keberanian
                                bukanlah tentang tidak takut, namun keberanian adalah tetap berjalan meski takut.
                            </span>
                        </div>
                    </div>
                </div>
            </main>
            <Navigator />
        </div>
    );
}