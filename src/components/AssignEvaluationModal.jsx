import { useEffect, useState } from "react";
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
    const [rows, setRows] = useState([]);
    const [notes, setNotes] = useState("");

    useEffect(() => {
        if (open) {
            // Filter out empty/invalid initial codes
            const validInitial = (initialCodes || []).filter((c) => Boolean(c) && String(c).trim() !== "");
            setRows(validInitial.length > 0 ? [...validInitial] : [""]);
            setNotes(initialNotes || "");
        }
    }, [open, initialCodes, initialNotes]);

    if (!open || !target) return null;

    const addRow = () => setRows((r) => [...r, ""]);
    const removeRow = (i) => setRows((r) => r.filter((_, idx) => idx !== i));
    const updateRow = (i, code) => setRows((r) => r.map((c, idx) => (idx === i ? code : c)));

    const handleSubmit = () => {
        const codes = rows.filter((c) => Boolean(c) && String(c).trim() !== "");
        onSubmit(codes, notes);
    };

    const title =
        target.type === "partner"
            ? `Input Evaluation to ${target.label}`
            : `Input General Evaluation to ${target.label}`;

    // Normalize allCodes so it handles both string arrays and object arrays safely
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
        .filter((item) => item.code.trim() !== ""); // Exclude empty codes from rendering options

    return (
        <Modal open={open} onClose={onClose} title={title}>
            <button
                type="button"
                onClick={addRow}
                className="w-full rounded-full bg-gray-200 py-1.5 text-sm font-bold text-gray-700 hover:bg-gray-300 mb-4"
            >
                + Add Evaluation Code
            </button>

            {/* Code Selectors */}
            <div className="flex flex-col gap-2 mb-4 max-h-48 overflow-y-auto">
                {rows.map((code, i) => (
                    <div key={`row-${i}`} className="flex items-center gap-3">
                        <select
                            value={code}
                            onChange={(e) => updateRow(i, e.target.value)}
                            className="flex-1 rounded-full border border-gray-300 px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-gray-400"
                        >
                            <option value="">Select code…</option>
                            {formattedCodes.map((c) => (
                                <option key={c.uniqueKey} value={c.code}>
                                    {c.code} {c.note ? `— ${c.note}` : ""}
                                </option>
                            ))}
                        </select>
                        <button
                            type="button"
                            onClick={() => removeRow(i)}
                            className="h-6 w-6 shrink-0 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 flex items-center justify-center font-bold"
                            aria-label="Remove"
                        >
                            -
                        </button>
                    </div>
                ))}
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