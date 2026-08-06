import { Info } from "lucide-react";

export default function InfoCard({ text }) {
    return (
        <div className="flex mb-3 text-xs flex-row place-items-center text-gray-500 border border-gray-300 bg-gray-200 p-2 rounded-2xl">
            <Info className="shrink-0 w-10 h-10 pl-2 pr-3" />
            {text}
        </div>
    )
}