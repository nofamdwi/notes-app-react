import BodyNotes from "./BodyNotes";
import { MdOutlineDeleteOutline, MdOutlineArchive, MdOutlineUnarchive, MdOutlineEdit } from 'react-icons/md'

/* eslint-disable react/prop-types */
export default function CardNotes({ note, id, title, body, createdAt, archived, onDelete, onArchive, onEdit }) {
    return (
        <div className="flex flex-col justify-between h-full bg-white shadow-md border border-gray-200 rounded-lg m-3 dark:bg-gray-800 dark:border-gray-700">
            <BodyNotes
                title={title}
                createdAt={createdAt}
                body={body}
            />
            <div className="flex justify-center gap-4 bg-blue p-7">
                {
                    archived === false ?
                        <button
                            className="border-2 border-slate-500 hover:bg-slate-500 py-1 px-3 rounded-md shadow-sm"
                            onClick={() => onArchive(id)}
                        >
                            <MdOutlineArchive className="text-2xl fill-slate-500 hover:fill-slate-50 dark:fill-slate-50" />
                        </button> :
                        <button
                            className="border-2 border-slate-500 hover:bg-slate-500 py-1 px-3 rounded-md shadow-sm"
                            onClick={() => onArchive(id)}
                        >
                            <MdOutlineUnarchive className="text-2xl fill-slate-500 hover:fill-slate-50 dark:fill-slate-50" />
                        </button>
                }
                <button
                    className="text-lg border-2 border-slate-500 hover:bg-slate-500 py-1 px-3 rounded-md shadow-sm"
                    onClick={() => onDelete(id)}
                >
                    <MdOutlineDeleteOutline className="text-2xl fill-slate-500 hover:fill-white dark:fill-slate-50" />
                </button>
                <button
                    className="flex items-center gap-2 text-lg font-medium text-slate-100 bg-blue-500 hover:bg-blue-700 py-1 px-6 rounded-md shadow-sm"
                    onClick={() => onEdit(note)}
                >
                    <MdOutlineEdit className="text-2xl fill-slate-50" /> edit
                </button>
            </div>
        </div>
    )
}
