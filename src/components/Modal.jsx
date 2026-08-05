import React, { useEffect } from "react";

export default function Modal({ open, onClose, title, children }) {
    // Lock body scrolling on mobile when modal is active
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [open]);

    if (!open) return null;

    return (
        <div
            className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={onClose} // Close on backdrop click for mobile usability
        >
            <div
                className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white p-5 sm:p-6 shadow-2xl border-3 border-black"
                onClick={(e) => e.stopPropagation()} // Prevent modal card clicks from closing backdrop
            >
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-sm sm:text-base font-extrabold uppercase text-black tracking-tight">{title}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 -mr-2 text-black hover:text-red-600 text-xl font-black leading-none touch-manipulation"
                        aria-label="Close"
                    >
                        ✕
                    </button>
                </div>
                <hr className="border-black/20 mb-4" />
                <div className="text-black text-sm">
                    {children}
                </div>
            </div>
        </div>
    );
}