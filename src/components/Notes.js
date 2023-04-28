const Notes = ({ note, removeNote }) => {

    // useEffect(() => {
    //     console.log('Hi ! Inside Notes');

    //     return () => {
    //         console.log('Hi ! This component is unmounting..... ');
    //     }
    // }, [])

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