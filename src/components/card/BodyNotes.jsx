import { showFormattedDate } from "../../utils/notesData"

/* eslint-disable react/prop-types */
export default function BodyNotes({ title, body, createdAt }) {
    return (
        <div className="flex flex-col h-full p-6">
            <h2 className="break-words text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{title}</h2>
            <p className="text-sm font-extralight text-gray-400s mb-3 dark:text-gray-300">{showFormattedDate(createdAt)}</p>
            <p className="text-base font-normal text-gray-700 mb-3 dark:text-gray-300">
                {body}
            </p>
        </div>
    )
}