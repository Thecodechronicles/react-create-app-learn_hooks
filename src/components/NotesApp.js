import { useEffect, useReducer } from 'react';
import notesReducer from '../reducer/notesReducer';
import NotesList from './NotesList';
import AddNoteForm from './AddNoteForm';

const NotesApp = () => {
    const [notes, dispatch] = useReducer(notesReducer, []);

    const removeNotes = (title) => {
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

    return (
        <div>
            <h2>Notes</h2>
            <NotesList notes={notes} removeNotes={removeNotes} />
            <AddNoteForm dispatch={dispatch} />
        </div>
    )
}

export default NotesApp;