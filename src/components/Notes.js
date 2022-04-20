import React, {useState} from 'react';
import {deleteNote, updateNote} from "../api/notesApi";

const Notes = ({notes, triggerRefresh}) => {

    const [selectedNote, setSelectedNote] = useState(0);

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
        <div data-testid='notes'>
            {notes.map(note => <div
                key={note.id}
                className='note-border'
                onKeyPress={handleKeyPress}
                onClick={() => setSelectedNote(note)}
            >
                <p contentEditable    //TODO this can be improved to avoid react warning
                   className='note-body-text'
                >
                    {note.content}
                </p>
                <div onClick={() => deleteSelectedNote(note)} className='icon'><p>ⓧ</p></div>
            </div>)}
        </div>
    );
}

export default Notes;
