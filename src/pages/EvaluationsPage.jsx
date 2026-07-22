import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { getCodes, getAssignments, getEvents, addEvent, saveAssignment, getNotes } from "../apis/api";
import { useAuth } from "../context/AuthContext";
import { getUniqueCodesForSimulation } from "../components/GetUniqueCodesForSimulation";
import { ArrowUpRight } from "lucide-react";
import AddEventModal from "../components/AddEventModal";
import AssignEvaluationModal from "../components/AssignEvaluationModal";

const CATEGORY_ORDER = ["Umum", "Pembawaan", "Zoom"];
const CATEGORY_LABEL = {
    Umum: "Evaluasi Umum",
    Pembawaan: "Evaluasi Pembawaan",
    Zoom: "Evaluasi Zoom"
};

function findCode(codes, code) {
    const found = codes.find((c) => c.code === code);
    return found
        ? { note: found.note, category: found.category }
        : { note: "(unknown code)", category: "Umum" };
}

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

export default function EvaluationsPage() {
    const { isCoordinator, password } = useAuth();

    const [events, setEvents] = useState([]);
    const [codes, setCodes] = useState([]);
    const [assignments, setAssignments] = useState([]);
    const [notes, setNotes] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [perPartner, setPerPartner] = useState(false);

    const [addEventOpen, setAddEventOpen] = useState(false);
    const [assignTarget, setAssignTarget] = useState(null);
    const [assignInitialCodes, setAssignInitialCodes] = useState([]);
    const [assignInitialNotes, setAssignInitialNotes] = useState("");

    const partnerGroups = [
        "Stella & Nexus (D614)",
        "Cosmo & Nebula (D601)",
        "Petra & Sirius (D610)",
        "Astreon & Draco (D607)",
        "Lunar & Linus (D701)",
        "Helios & Orion (D704)",
        "Terra & Aster (D707)",
        "Starla & Gamma (D710)"
    ];

    const loadAll = async () => {
        try {
            const [e, c, a, n] = await Promise.all([getEvents(), getCodes(), getAssignments(), getNotes()]);
            setEvents(e);
            setCodes(c);
            setAssignments(a);
            setNotes(n);
            setSelectedEvent((prev) => prev ?? (e.length > 0 ? e[0].name : null));
        } catch (err) {
            console.error("Failed to load evaluation data:", err);
        }
    };

    useEffect(() => {
        loadAll();
        document.title = "Evaluasi Rangkaian Module";
    }, []);

    // 1. General Row Data (For Notes & Modal initialization)
    const generalAssignments = useMemo(() => {
        if (!selectedEvent) return { note: "", evals: [] };

        const row = assignments.find(
            (a) => a.simulation === selectedEvent && (a.group === "General" || a.partner === "General")
        );

        if (!row) return { note: "", evals: [] };

        const noteText = row.note || row.notes || "";
        const codeList = (row.evalCodes ?? "").split(/\s+/).filter(Boolean);
        const evals = codeList.map((code) => ({ code, ...findCode(codes, code) }));

        return {
            note: noteText,
            evals,
        };
    }, [assignments, selectedEvent, codes]);

    // 2. Per-partner mapped assignments (Per Partner ON)
    const partnerAssignments = useMemo(() => {
        const out = {};
        for (const a of assignments) {
            if (a.simulation !== selectedEvent || a.group === "General") continue;

            out[a.group] = {
                note: a.note || a.notes || "",
                evals: (a.evalCodes ?? "")
                    .split(/\s+/)
                    .filter(Boolean)
                    .map((code) => ({ code, ...findCode(codes, code) })),
            };
        }
        return out;
    }, [assignments, selectedEvent, codes]);

    // 3. COMBINED UNIQUE EVALUATIONS across General + ALL Partners for this simulation (Per Partner OFF)
    const combinedUniqueEvals = useMemo(() => {
        if (!selectedEvent || perPartner) return [];

        // Extracts deduplicated array of ALL codes assigned to "General" or ANY partner for selectedEvent
        const uniqueCodeStrings = getUniqueCodesForSimulation(assignments, selectedEvent);

        return uniqueCodeStrings.map((code) => ({
            code,
            ...findCode(codes, code),
        }));
    }, [assignments, selectedEvent, codes, perPartner]);

    const openAssignPartner = (group) => {
        const groupData = partnerAssignments[group] ?? { note: "", evals: [] };

        setAssignTarget({ type: "partner", label: group });
        setAssignInitialCodes(groupData.evals.map((e) => e.code));
        setAssignInitialNotes(groupData.note);
    };

    const openAssignGeneral = () => {
        setAssignTarget({ type: "general", label: selectedEvent });
        setAssignInitialCodes(generalAssignments.evals.map((e) => e.code));
        setAssignInitialNotes(generalAssignments.note);
    };

    const handleAssignSubmit = async (codeList, notesList) => {
        if (!isCoordinator) return alert("Only coordinators can modify evaluations.");
        const group = assignTarget.type === "partner" ? assignTarget.label : "General";

        try {
            await saveAssignment(password, selectedEvent, group, codeList, notesList);
            setAssignTarget(null);
            await loadAll();
            toast.success("Evaluation updated successfully!");
        } catch (err) {
            toast.error(err.message || "Action failed!");
        }
    };

    const handleAddEvent = async ({ name, date }) => {
        if (!isCoordinator) return alert("Only coordinators can add events.");
        try {
            await addEvent(password, name, date);
            setAddEventOpen(false);
            toast.success("Event added successfully!");
            await loadAll();
        } catch (err) {
            toast.error(err.message || "Action failed!");
        }
    };

    return (
        <div className="min-h-screen bg-neutral-100 px-4 py-8">
            <div className="mt-20 mx-auto max-w-xl">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl font-extrabold text-gray-900">Evaluasi Rangkaian</h1>
                    <Link
                        to="/all-evaluations"
                        className="text-xs font-bold text-center bg-white border border-gray-200 px-3 py-1.5 rounded-full text-gray-700 hover:bg-gray-50 shadow-sm transition-colors"
                    >
                        All Evaluations
                    </Link>
                </div>

                {/* Top Control Bar */}
                <div className="rounded-2xl bg-white pb-4 px-4 pt-3 shadow-sm mb-8">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3 border-b border-gray-200 pb-3">
                        <span className="font-bold text-gray-900 shrink-0">Rangkaian</span>
                        <div className="flex flex-wrap items-center gap-2">
                            {events.map((e) => (
                                <button
                                    key={e.name}
                                    onClick={() => setSelectedEvent(e.name)}
                                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${selectedEvent === e.name
                                        ? "bg-red-400 text-white"
                                        : "bg-red-100 text-red-500 hover:bg-red-200"
                                        }`}
                                >
                                    {e.name}
                                </button>
                            ))}
                            {isCoordinator && (
                                <button
                                    onClick={() => setAddEventOpen(true)}
                                    className="h-7 w-7 rounded-full bg-red-400 text-white font-bold hover:bg-red-500 shrink-0 flex items-center justify-center"
                                    aria-label="Add event"
                                >
                                    +
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="font-bold text-gray-900 shrink-0">Eval Partner</span>
                        <button
                            onClick={() => setPerPartner((v) => !v)}
                            className={`rounded-full px-4 py-1 text-xs font-bold transition-colors ${perPartner ? "bg-red-400 text-white" : "bg-gray-300 text-gray-700"
                                }`}
                        >
                            {perPartner ? "ON" : "OFF"}
                        </button>
                    </div>
                </div>

                {/* Empty State */}
                {!selectedEvent && (
                    <div className="text-center text-gray-500 text-sm mt-10">
                        No events yet — add one to get started.
                    </div>
                )}

                {/* Per Partner Mode (ON) */}
                {selectedEvent && perPartner && (
                    <div>
                        <h2 className="font-bold text-gray-900 mb-2">{selectedEvent}</h2>
                        <div className="flex flex-col gap-4">
                            {partnerGroups.map((group) => {
                                const groupData = partnerAssignments[group] ?? { note: "", evals: [] };
                                const evals = groupData.evals ?? [];
                                const partnerNote = groupData.note ?? "";

                                return (
                                    <div key={group} className="rounded-2xl bg-white p-4 shadow-sm">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="font-bold text-gray-900">{group}</span>
                                            {isCoordinator && (
                                                <button
                                                    onClick={() => openAssignPartner(group)}
                                                    className="h-6 w-6 rounded-full bg-red-400 text-white font-bold hover:bg-red-500 flex items-center justify-center"
                                                    aria-label="Edit evaluations"
                                                >
                                                    +
                                                </button>
                                            )}
                                        </div>

                                        {partnerNote && (
                                            <div className="flex flex-col gap-2 text-gray-500 mb-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                                <p className="text-sm">
                                                    <span className="font-extrabold">Notes: </span>
                                                    {partnerNote}
                                                </p>
                                            </div>
                                        )}

                                        <div className="flex flex-col gap-2">
                                            {evals.length === 0 && (
                                                <div className="text-sm text-gray-400">No evaluations yet</div>
                                            )}
                                            {evals.map((e, i) => (
                                                <EvalRow
                                                    key={e.code ? `${e.code}-${i}` : `eval-${group}-${i}`}
                                                    code={e.code}
                                                    note={e.note}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Per Partner Mode (OFF - General View + Unique Aggregated Partner Evaluations) */}
                {selectedEvent && !perPartner && (
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="font-bold text-gray-900">{selectedEvent} (Evaluasi Keseluruhan)</h2>
                            {isCoordinator && (
                                <button
                                    onClick={openAssignGeneral}
                                    className="h-6 w-6 rounded-full bg-red-400 text-white font-bold hover:bg-red-500 flex items-center justify-center"
                                    aria-label="Edit general evaluations"
                                >
                                    +
                                </button>
                            )}
                        </div>

                        {/* Shows General event notes */}
                        {generalAssignments.note && (
                            <div className="flex flex-col gap-2 text-gray-500 mb-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                <p className="text-sm">
                                    <span className="font-extrabold">Notes: </span>
                                    {generalAssignments.note}
                                </p>
                            </div>
                        )}

                        {/* Combined Unique Evaluations (General + ALL Partners) */}
                        <div className="flex flex-col gap-2">
                            {combinedUniqueEvals.length === 0 && (
                                <div className="text-sm text-gray-400">No evaluations found for this event</div>
                            )}
                            {combinedUniqueEvals.map((e, i) => (
                                <EvalRow
                                    key={e.code ? `${e.code}-${i}` : `comb-${i}`}
                                    code={e.code}
                                    note={e.note}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Modals */}
            <AddEventModal
                open={addEventOpen}
                onClose={() => setAddEventOpen(false)}
                onSubmit={handleAddEvent}
            />
            <AssignEvaluationModal
                open={!!assignTarget}
                onClose={() => setAssignTarget(null)}
                onSubmit={handleAssignSubmit}
                target={assignTarget}
                allCodes={codes}
                initialCodes={assignInitialCodes}
                initialNotes={assignInitialNotes}
            />
        </div>
    );
}