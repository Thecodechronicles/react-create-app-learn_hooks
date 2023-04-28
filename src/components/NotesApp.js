import { useState, useEffect, useReducer } from 'react';
import notesReducer from '../reducer/notesReducer';
import NotesList from './NotesList';

const NotesApp = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    // const [notes, setNotes] = useState([]);
    const [notes, dispatch] = useReducer(notesReducer, []);

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

    const removeNotes = (title) => {
        const retainedNotes = notes.filter((note) => {
            return note.title !== title;
        });
        // setNotes(retainedNotes);
        dispatch({
            type: 'REMOVE_NOTES',
            title
        })
    }

    useEffect(() => {
        console.log('Hi ! Inside getItems');
        const notesData =
            localStorage.getItem('notes') === '[]' ? null : JSON.parse(localStorage.getItem('notes'));

        if (notesData) {
            // setNotes(notesData);
            dispatch({
                type: 'POPULATE_NOTES',
                notes: notesData
            })
        }
    }, []);

    useEffect(() => {
        console.log('Hi ! Inside NotesApp');
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    // return ([
    //     <input type='text' />,
    //     <button>abc</button>
    // ]);

    return (
        <div>
            <h2>Notes</h2>
            <NotesList notes={notes} removeNotes={removeNotes} />
            <form onSubmit={addNotes}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={body} onChange={(e) => setBody(e.target.value)} />
                <button>Add Notes</button>
            </form>
        </div>
    )
}

export default NotesApp;