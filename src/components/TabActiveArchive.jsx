import CardList from "./card/CardList"
/* eslint-disable react/prop-types */
export default function TabActiveArchive({ notes, onDelete, onArchive, onEdit }) {
    return (
        <main className="mx-auto container">
            <h2 className="text-3xl font-bold dark:text-slate-50 ml-6 mt-6">Active Notes</h2>
            <CardList
                notes={notes.filter(note => note.archived === false)}
                onDelete={onDelete}
                onArchive={onArchive}
                onEdit={onEdit}
            />
            <h2 className="text-3xl font-bold dark:text-slate-50 ml-6 mt-6">Archive Notes</h2>
            <CardList
                notes={notes.filter(note => note.archived === true)}
                onDelete={onDelete}
                onArchive={onArchive}
                onEdit={onEdit}
            />
        </main>
    )
}