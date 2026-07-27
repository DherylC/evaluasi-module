import { useState } from "react";
import Modal from "./Modal";
import { toast } from "react-hot-toast";


export default function AddEventModal({ open, onClose, onSubmit }) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = () => {
        if (!name.trim()) return;
        onSubmit({ name: name.trim(), date });
        toast.success("Successfull!");
        setName("");
        setDate("");
    };

    return (
        <Modal open={open} onClose={onClose} title="Input New Event">
            <label className="text-sm text-gray-600">Event Name</label>
            <input
                className="w-full rounded-full border border-gray-300 px-4 py-2 mb-4 mt-1 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Simulasi 4"
            />

            <label className="text-sm text-gray-600">Event Date</label>
            <input
                type="date"
                className="w-full rounded-full border border-gray-300 px-4 py-2 mb-6 mt-1 outline-none"
                value={date}
                onChange={(e) => setDate(e.target.value)}
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