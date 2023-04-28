import Notes from './Notes';

const Noteslist = ({ notes, removeNotes }) => (
    notes.map((note) => (
        <Notes
            note={note}
            removeNote={removeNotes}
        />
    ))
)

export default Noteslist;