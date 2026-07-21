import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getCodes, addCode } from "../apis/api";
import AddEvaluationCodeModal from "../components/AddEvaluationCodeModal";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";

const CATEGORY_ORDER = ["Umum", "Pembawaan", "Zoom"];
const CATEGORY_LABEL = {
    Umum: "Evaluasi Umum",
    Pembawaan: "Evaluasi Pembawaan",
    Zoom: "Evaluasi Zoom"
};

function EvalRow({ code, note }) {
    return (
        <div className="flex items-center gap-3 rounded-3xl bg-white border border-gray-100 shadow-sm px-3 py-2">
            <span className="rounded-full bg-red-400 px-3 py-1 text-xs font-bold text-white shrink-0">
                {code}
            </span>
            <span className="text-sm text-gray-800">{note}</span>
        </div>
    );
}

export default function AllEvaluationsPage() {
    const [codes, setCodes] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [addCodeOpen, setAddCodeOpen] = useState(false);
    const { isCoordinator, password } = useAuth();

    const loadCodes = async () => {
        try {
            const c = await getCodes();
            setCodes(c);
        } catch (err) {
            console.error("Failed to load codes:", err);
        }
    };

    useEffect(() => {
        loadCodes();
    }, []);

    const codesByCategory = useMemo(() => {
        const map = {};
        for (const c of codes) {
            map[c.category] ??= [];
            map[c.category].push(c);
        }
        return map;
    }, [codes]);

    const handleAddCode = async ({ category, code, note }) => {
        if (!isCoordinator || !password) {
            toast.error("You must be logged in as a coordinator to perform this action.");
            return;
        }

        try {
            await addCode(password, category, code, note);
            setAddCodeOpen(false);
            toast.success("Evaluation code added successfully!");
            await loadCodes();
        } catch (err) {
            toast.error(err.message || "Action failed!");
        }
    };

    const activeCategories = selectedFilter === "All"
        ? CATEGORY_ORDER
        : [selectedFilter];

    return (
        <div className="min-h-screen bg-neutral-100 px-4 py-8">
            <div className="mt-20 mx-auto max-w-xl">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl font-extrabold text-gray-900">Semua Evaluasi</h1>
                    <Link
                        to="/evaluations"
                        className="text-xs text-center font-bold bg-white border border-gray-200 px-3 py-1.5 rounded-full text-gray-700 hover:bg-gray-50 shadow-sm transition-colors"
                    >
                        Eval Rangkaian
                    </Link>
                </div>

                {/* Category Filter Pills */}
                <div className="rounded-2xl bg-white p-4 mb-8 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="font-bold text-gray-900 shrink-0">Filter</span>

                    {/* Wrapped container */}
                    <div className="flex flex-wrap items-center gap-2">
                        {["All", ...CATEGORY_ORDER].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedFilter(cat)}
                                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${selectedFilter === cat
                                    ? "bg-red-400 text-white"
                                    : "bg-red-100 text-red-500 hover:bg-red-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {isCoordinator &&
                    <button
                        onClick={() => setAddCodeOpen(true)}
                        className="w-full rounded-full bg-gray-200 -mt-10 mb-6 py-2.5 text-sm font-bold text-gray-700 hover:bg-gray-300 transition-colors"
                    >
                        + Add new evaluation code
                    </button>
                }

                {/* Master Code List */}
                <div className="flex flex-col gap-6">
                    {activeCategories.map((cat) => {
                        const categoryCodes = codesByCategory[cat] ?? [];
                        return (
                            <div key={cat}>
                                <h3 className="font-bold text-gray-900 mb-2">{CATEGORY_LABEL[cat]}</h3>
                                {categoryCodes.length === 0 ? (
                                    <div className="text-sm text-gray-400 italic">Loading...</div>
                                ) : (
                                    <div className="flex flex-col gap-2">
                                        {categoryCodes.map((c) => (
                                            <EvalRow key={c.code} code={c.code} note={c.note} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>


            </div>

            <AddEvaluationCodeModal
                open={addCodeOpen}
                onClose={() => setAddCodeOpen(false)}
                onSubmit={handleAddCode}
            />
        </div>
    );
}