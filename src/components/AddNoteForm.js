import { useState } from 'react';

const AddNoteForm = ({ dispatch }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNotes = (e) => {
        e.preventDefault();
        // setNotes([
        //     ...notes,
        //     { title, body }
        // ]);
        dispatch({
            type: 'ADD_NOTES',
            notes: { title, body }
        })
        setTitle('');
        setBody('');
    }

    return (
        <div>
            <p>Add Note</p>
            <form onSubmit={addNotes}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={body} onChange={(e) => setBody(e.target.value)} />
                <button>Add Notes</button>
            </form>
        </div>
    )
}

export default AddNoteForm;