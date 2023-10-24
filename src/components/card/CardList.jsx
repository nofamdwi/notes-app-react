import CardNotes from "./CardNotes"

/* eslint-disable react/prop-types */
export default function CardList({ notes, onDelete, onArchive, onEdit }) {
    return (
        <div className="flex justify-center pb-8">
            {
                notes.length !== 0 ?
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                        {
                            // eslint-disable-next-line react/prop-types
                            notes.map(note => (
                                <div key={note.id}>
                                    <CardNotes note={note} onDelete={onDelete} onArchive={onArchive} onEdit={onEdit} {...note} />
                                </div>
                                // eslint-disable-next-line react/prop-types
                            ))
                        }
                    </div> :
                    <p className="p-5 text-2xl dark:text-slate-50">No Notes Created</p>
            }
        </div>
    )
}