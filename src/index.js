// import React from 'react';
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import App from './App'
// import 'normalize.css/normalize.css'
// import './styles/styles.scss'

console.log('app is running !');

// function App() {
//     console.log('useState', useState);
//     const [state, setState] = useState('');
//     const appInner = () => {
//         setState('Again !!!!');
//         console.log('appInner working !');
//     }
//     return (
//         <div>
//             <h2 onClick={appInner}>Hi ! Let's just get started {state}!</h2>
//         </div>
//     );
// }

const NotesApp = () => {
    const localNotes = localStorage.getItem('notes') === '[]' ? null : JSON.parse(localStorage.getItem('notes'));
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [notes, setNotes] = useState(localNotes || []);

    const addNotes = (e) => {
        e.preventDefault();
        setNotes([
            ...notes,
            { title, body }
        ]);
        setTitle('');
        setBody('');
    }

    const removeNotes = (title) => {
        const retainedNotes = notes.filter((note) => {
            return note.title !== title;
        });
        setNotes(retainedNotes);
    }

    useEffect(() => {
        console.log('Hi ! Inside NotesApp');
        localStorage.setItem('notes', JSON.stringify(notes));
    });

    return (
        <div>
            <h2>Notes</h2>
            {notes.map((note) => {
                return (
                    <Notes
                        note={note}
                        removeNote={removeNotes}
                    />
                )
            })
            }
            <form onSubmit={addNotes}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={body} onChange={(e) => setBody(e.target.value)} />
                <button>Add Notes</button>
            </form>
        </div>
    )
}

const Notes = ({ note, removeNote }) => {

    useEffect(() => {
        console.log('Hi ! Inside Notes');
    })

    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={(e) => {
                // e.preventDefault();
                removeNote(note.title);
            }}>Remove Notes</button>
        </div>
    )
}

let appRoot = document.getElementById('reactApp');
ReactDOM.render(<NotesApp />, appRoot);
