export default function Modal({ open, onClose, title, children }) {
    if (!open) return null;

    return (
        <div className="select-none fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-base font-bold text-gray-900">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 text-lg leading-none"
                        aria-label="Close"
                    >
                        ×
                    </button>
                </div>
                <hr className="border-gray-200 mb-4" />
                {children}
            </div>
        </div>
    );
}