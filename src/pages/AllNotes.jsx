import { useState } from "react";
import { getInitialData } from "../utils/notesData";
import toast, { Toaster } from "react-hot-toast";
import NavNote from "../components/header/NavNotes";
import TabActiveArchive from "../components/TabActiveArchive";
import ModalInputForm from "../components/form/ModalInputForm";
import Editform from "../components/form/EditForm";
import InputSearchNotes from "../components/header/InputSearchNotes";
import Footer from "../components/footer/Footer";

export default function AllNotes() {
    const [notes, setNotes] = useState(getInitialData());
    const [unfilteredNotes, setUnfilteredNotes] = useState(getInitialData());
    const [selectedNoteToEdit, setSelectedNoteToEdit] = useState(null);

    const addNewNoteHandler = (newNoteData) => {
        setNotes((prevNotes) => [newNoteData, ...prevNotes]);
        setUnfilteredNotes((prevNotes) => [newNoteData, ...prevNotes])
    };

    const onDeleteHandler = (id) => {
        const result = window.confirm('Are you sure delete this note?');
        if (result) {
            setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
            setUnfilteredNotes((prevUnfilteredNotes) => prevUnfilteredNotes.filter((note) => note.id !== id));
            toast.success('Note deleted!');
        }
    }

    const onArchivedHandler = (id) => {
        const noteToMove = unfilteredNotes.find((note) => note.id === id);
        const changesNote = { ...noteToMove, archived: !noteToMove.archived };
        setNotes((prevNotes) => [
            ...prevNotes.filter((note) => note.id !== id),
            changesNote,
        ]);
        setUnfilteredNotes((prevUnfilteredNotes) => [
            ...prevUnfilteredNotes.filter((note) => note.id !== id),
            changesNote,
        ]);
        if (noteToMove.archived) {
            toast.success('Note moved to active!');
        } else {
            toast.success('Note archived!');
        }
    };

    const onEditHandler = (note) => {
        setSelectedNoteToEdit(note);
    };

    const editNote = (editedNote) => {
        setNotes((prevNotes) => {
            const updatedNotes = prevNotes.map((note) => {
                if (note.id === editedNote.id) {
                    return editedNote;
                }
                return note;
            });
            return updatedNotes;
        });
        setUnfilteredNotes((prevUnfilteredNotes) => {
            const updatedUnfilteredNotes = prevUnfilteredNotes.map((note) => {
                if (note.id === editedNote.id) {
                    return editedNote;
                }
                return note;
            });
            return updatedUnfilteredNotes;
        });
    };

    const onSearchHandler = (text) => {
        if (text.length !== 0 && text.trim() !== '') {
            setNotes(unfilteredNotes.filter((note) => note.title.toLowerCase().includes(text.toLowerCase())))
        } else {
            setNotes(unfilteredNotes)
        }
    }


    return (
        <div className="flex flex-col items-center min-w-min min-h-screen dark:bg-gradient-to-b from-gray-900 to-gray-600">
            <NavNote />
            <InputSearchNotes onSearch={onSearchHandler} />
            <TabActiveArchive notes={notes} onDelete={onDeleteHandler} onArchive={onArchivedHandler} onEdit={onEditHandler} />
            <ModalInputForm addNewNote={addNewNoteHandler} />
            {selectedNoteToEdit && (
                <Editform
                    noteToEdit={selectedNoteToEdit}
                    selectNoteToEdit={setSelectedNoteToEdit}
                    editNote={editNote}
                    onClose={() => setSelectedNoteToEdit(null)}
                />
            )}
            <Footer />
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}