import React from "react";
import { ChevronRight } from "lucide-react";

export default function ModalLinkItem({ item, onOpenModal }) {
    const IconComponent = item.icon;
    const isModal = item.type === "modal" || !item.url;

    const handleClick = (e) => {
        if (isModal) {
            e.preventDefault();
            if (onOpenModal) {
                onOpenModal(item.title, item.modalContent || item.imageUrl);
            }
        }
    };

    const sharedContent = (
        <div className="flex items-center justify-between gap-3 text-left pointer-events-none">
            {/* Left Side: Icon & Titles */}
            <div className="flex items-center gap-3.5 min-w-0">
                {IconComponent && (
                    <div className="shrink-0 p-3 rounded-xl border border-black/10 group-hover:border-red-500 transition-all duration-200">
                        <IconComponent className="w-4 h-4 sm:w-6 sm:h-6 group-hover:text-red-600 stroke-2 transition-all duration-200" />
                    </div>
                )}
                <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-extrabold uppercase text-black group-hover:text-red-600 transition-all duration-200">
                        {item.title}
                    </h3>
                    {item.subtitle && (
                        <p className="text-[11px] text-gray-500 mt-0.5">
                            {item.subtitle}
                        </p>
                    )}
                </div>
            </div>

            {/* Right Side: Action Arrow */}
            <div className="shrink-0">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-2 text-black group-hover:translate-x-0.5 transition-transform" />
            </div>
        </div>
    );

    const baseClasses =
        "group block w-full p-4 transition-colors hover:bg-yellow-50 active:bg-yellow-100 rounded-xl cursor-pointer select-none touch-manipulation";

    if (isModal) {
        return (
            <button type="button" onClick={handleClick} className={baseClasses}>
                {sharedContent}
            </button>
        );
    }

    return (
        <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={baseClasses}
        >
            {sharedContent}
        </a>
    );
}