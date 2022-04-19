import React, {useState} from 'react';
import {createNote} from "../api/notesApi";

const NoteCreator = ({triggerRefresh}) => {

    const [inputText, setInputText] = useState('');

    const create = () => {
        createNote({
            'content': inputText,
            'userId': 1,
        })
            .then(() => {
                triggerRefresh();
                setInputText('');
            })
            .catch(error => console.error(error));
    };

    return (
        <>
            <div className='create-container'>
                <input className='note-create'
                       onChange={event => setInputText(event.target.value)}
                       type="text"
                       id="name"
                       name="name"
                       placeholder='Enter todo...'
                       value={inputText}
                />
                <button
                    onClick={create}>
                    Submit
                </button>
            </div>
        </>
    );
}

export default NoteCreator;
