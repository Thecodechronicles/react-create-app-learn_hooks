const Notes = ({ note, removeNote }) => {

    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={(e) => {
                removeNote(note.title);
            }}>Remove Notes</button>
        </div>
    )
}

export default Notes;