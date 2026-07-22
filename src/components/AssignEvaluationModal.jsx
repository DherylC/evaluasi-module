import { useEffect, useState } from "react";
import { Search, Check } from "lucide-react";
import Modal from "./Modal";

export default function AssignEvaluationModal({
    open,
    onClose,
    onSubmit,
    target,
    allCodes = [],
    initialCodes = [],
    initialNotes = "",
}) {
    const [notes, setNotes] = useState("");
    const [selectedCodes, setSelectedCodes] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    // Sync initial state when modal opens
    useEffect(() => {
        if (open) {
            const validInitial = (initialCodes || []).filter(
                (c) => Boolean(c) && String(c).trim() !== ""
            );
            setSelectedCodes([...validInitial]);
            setNotes(initialNotes || "");
            setSearchQuery(""); // Reset search query on open
        }
    }, [open, initialCodes, initialNotes]);

    if (!open || !target) return null;

    // Toggle individual evaluation code selection
    const toggleCode = (code) => {
        setSelectedCodes((prev) =>
            prev.includes(code)
                ? prev.filter((c) => c !== code) // Deselect if active
                : [...prev, code]               // Add if inactive
        );
    };

    const handleSubmit = () => {
        onSubmit(selectedCodes, notes);
    };

    const title =
        target.type === "partner"
            ? `Input Evaluation to ${target.label}`
            : `Input General Evaluation to ${target.label}`;

    // Normalize allCodes safely
    const formattedCodes = (allCodes || [])
        .map((item, index) => {
            if (typeof item === "string") {
                return { code: item, note: "", uniqueKey: item || `str-${index}` };
            }
            const codeVal = item?.code || item?.evalCode || "";
            return {
                code: codeVal,
                note: item?.note || item?.description || "",
                uniqueKey: codeVal || `opt-${index}`,
            };
        })
        .filter((item) => item.code.trim() !== "");

    // Live search filter (matches against code OR note text)
    const filteredCodes = formattedCodes.filter((item) => {
        const query = searchQuery.toLowerCase().trim();
        if (!query) return true;
        return (
            item.code.toLowerCase().includes(query) ||
            item.note.toLowerCase().includes(query)
        );
    });

    return (
        <Modal open={open} onClose={onClose} title={title}>
            {/* Search Input Bar */}
            <div className="relative mb-3">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search code or description..."
                    className="w-full rounded-full border border-gray-300 pl-9 pr-3 py-1.5 text-xs outline-none focus:ring-2 focus:ring-gray-400 bg-gray-50"
                />
            </div>

            {/* Selection Counter & Clear All */}
            <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    Selected ({selectedCodes.length})
                </span>
                {selectedCodes.length > 0 && (
                    <button
                        type="button"
                        onClick={() => setSelectedCodes([])}
                        className="text-[11px] font-semibold text-red-500 hover:underline"
                    >
                        Clear All
                    </button>
                )}
            </div>

            {/* Scrollable Toggle List */}
            <div className="flex flex-col gap-2 mb-4 max-h-56 overflow-y-auto pr-1 border border-gray-200 rounded-2xl p-2 bg-gray-50">
                {filteredCodes.length === 0 ? (
                    <div className="text-center py-6 px-2">
                        <p className="text-xs text-gray-400 italic">
                            {searchQuery
                                ? `No evaluations match "${searchQuery}"`
                                : "No evaluation codes available."}
                        </p>
                    </div>
                ) : (
                    filteredCodes.map((c) => {
                        const isSelected = selectedCodes.includes(c.code);
                        return (
                            <button
                                key={c.uniqueKey}
                                type="button"
                                onClick={() => toggleCode(c.code)}
                                className={`flex items-center justify-between p-2.5 rounded-xl text-sm font-medium transition-all text-left border ${isSelected
                                    ? "bg-black text-white border-black shadow-sm"
                                    : "bg-white text-gray-800 border-gray-200 hover:border-gray-300"
                                    }`}
                            >
                                <div className="flex items-center gap-2 overflow-hidden pr-2">
                                    <span
                                        className={`font-mono font-bold text-xs px-2 py-0.5 rounded-md shrink-0 ${isSelected
                                            ? "bg-gray-800 text-yellow-300"
                                            : "bg-gray-100 text-gray-700"
                                            }`}
                                    >
                                        {c.code}
                                    </span>
                                    {c.note && (
                                        <span className="truncate text-xs opacity-80">
                                            {c.note}
                                        </span>
                                    )}
                                </div>

                                <div
                                    className={`w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors ${isSelected
                                        ? "bg-yellow-400 border-black text-black"
                                        : "border-gray-300 bg-white"
                                        }`}
                                >
                                    {isSelected && <Check className="w-3 h-3 stroke-3" />}
                                </div>
                            </button>
                        );
                    })
                )}
            </div>

            {/* Partner Notes Field */}
            <div className="mb-6">
                <label className="block text-xs font-bold text-gray-600 mb-1">
                    Partner Note / Comment
                </label>
                <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add notes for this group..."
                    className="w-full rounded-2xl border border-gray-300 p-3 text-sm outline-none focus:ring-2 focus:ring-gray-400 resize-none"
                    rows={3}
                />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
                <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 rounded-full bg-red-200 py-2 text-sm font-semibold text-red-900 hover:bg-red-300"
                >
                    cancel
                </button>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex-1 rounded-full bg-green-300 py-2 text-sm font-semibold text-green-900 hover:bg-green-400"
                >
                    submit
                </button>
            </div>
        </Modal>
    );
}