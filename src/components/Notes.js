import React, {useEffect, useState} from 'react';
import {deleteNote, updateNote} from "../api/notesApi";

const Notes = ({notes, triggerRefresh}) => {

    const [selectedNote, setSelectedNote] = useState(0);

    const handleChange = event => {
        console.log(event);
    };

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const updatedNote = {...selectedNote, 'content': event.target.innerText};
            updateNote(updatedNote);
        }
    };

    const deleteSelectedNote = (note) => {
        deleteNote(note)
            .then(() => triggerRefresh())
            .catch(error => console.log(error));
    };

    return (
        <>
            {notes.map(note => <div
                key={note.id}
                className='note-border'
                onKeyPress={handleKeyPress}
                onClick={() => setSelectedNote(note)}
            >
                <p contentEditable
                   className='note-body-text'
                   onChange={handleChange}
                >
                    {note.content}
                </p>
                <div onClick={() => deleteSelectedNote(note)} className='icon'><p>ⓧ</p></div>
            </div>)}
        </>
    );
}

export default Notes;
