import { useState } from "react";
import Modal from "./Modal";
import { toast } from "react-hot-toast";

const CATEGORIES = ["Umum", "Pembawaan", "Zoom"];

export default function AddEvaluationCodeModal({ open, onClose, onSubmit }) {
    const [category, setCategory] = useState("Umum");
    const [code, setCode] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        if (!code.trim() || !description.trim()) return;
        onSubmit({ category, code: code.trim(), note: description.trim() });
        toast.success("Successfull!");
        setCode("");
        setDescription("");
    };

    return (
        <Modal open={open} onClose={onClose} title="Input New Evaluation">
        <label className="text-sm text-gray-600">Evaluasi</label>
        <div className="flex gap-2 mt-1 mb-4">
            {CATEGORIES.map((c) => (
            <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                category === c ? "bg-red-400 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
                {c}
            </button>
            ))}
        </div>

        <label className="text-sm text-gray-600">Code</label>
        <input
            className="w-full rounded-full border border-gray-300 px-4 py-2 mb-4 mt-1 outline-none"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="U03"
        />

        <label className="text-sm text-gray-600">Description</label>
        <textarea
            className="w-full rounded-2xl border border-gray-300 px-4 py-2 mb-6 mt-1 outline-none min-h-25 resize-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Deskripsi evaluasi..."
        />

        <div className="flex gap-3">
            <button
            onClick={onClose}
            className="flex-1 rounded-full bg-red-200 py-2 text-sm font-semibold text-red-900 hover:bg-red-300"
            >
            Cancel
            </button>
            <button
            onClick={handleSubmit}
            className="flex-1 rounded-full bg-green-300 py-2 text-sm font-semibold text-green-900 hover:bg-green-400"
            >
            Submit
            </button>
        </div>
        </Modal>
    );
}