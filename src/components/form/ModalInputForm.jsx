import { useState } from "react";
import { MdAddCircle } from 'react-icons/md';
import toast, { Toaster } from "react-hot-toast";

/* eslint-disable react/prop-types */
export default function ModalInputForm({ addNewNote, title, body }) {
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    }

    const [notes, setNotes] = useState({
        title: '',
        titleLength: 0,
        body: ''
    });

    const onTitleChangeHandler = (e) => {
        e.preventDefault();
        if (e.target.value.length <= 50) {
            setNotes((prevNotes) => ({
                ...prevNotes,
                title: e.target.value,
                titleLength: e.target.value.length
            }));
        } else {
            toast.error('Max length for title is 50');
        }
    };

    const onBodyChange = (e) => {
        setNotes((prevNotes) => ({
            ...prevNotes,
            body: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (notes.title === '') {
            toast.error('Title cannot be empty!')
        } else if (notes.body === '') {
            toast.error('Note body cannot be empty!');
        } else {
            const newNotesData = {
                id: +new Date(),
                title: notes.title,
                body: notes.body,
                archived: false,
                createdAt: new Date(),
            }
            const result = addNewNote(newNotesData);
            if (!result) {
                toast.success('New note saved')
                setNotes((prevNotes) => ({
                    ...prevNotes,
                    title: '',
                    body: '',
                    titleLength: 0
                }))
                handleClose();
            } else {
                toast.error('New note failed to save!')
            }
        }
    }

    return (
        <div>
            <button className="fixed bottom-12 right-12 dark:color='white'" onClick={handleOpen} >
                <MdAddCircle className="text-5xl dark:fill-white" />
            </button>
            {openModal && (
                <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-sm bg-black/10"  >
                    <form className="w-2/4 h-2/4 px-4 flex flex-col justify-center bg-white gap-3 border border-slate-600 rounded-md sm:min-w-max dark:bg-black" onSubmit={onSubmit}>
                        <h1 className="font-bold text-3xl dark:text-slate-50">New Notes</h1>
                        <p className="font-light dark:text-slate-50">Character left: {50 - notes.titleLength}</p>
                        <input
                            className="block h-12 px-3 shadow-md bg-white border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            type="text"
                            placeholder="title for notes..."
                            value={title}
                            onChange={onTitleChangeHandler}
                        />
                        <textarea
                            className="block p-2.5 h-2/5 text-md bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="write notes at here..."
                            value={body}
                            onChange={onBodyChange}
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 py-2 px-5 font-medium text-center text-lg hover:bg-blue-800 rounded-md shadow-md text-white"
                        >
                            Create
                        </button>
                        <button
                            className="bg-slate-100 py-1 px-5 font-normal text-lg hover:bg-slate-300 rounded-md"
                            onClick={handleClose}
                        >
                            Close
                        </button>
                    </form>
                </div>
            )}
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}