import React from 'react';

const NoteHeader = ({totalNumberOfNotes}) => {

    return (
        <>
            <div className='note-header'>You have {totalNumberOfNotes} todos</div>
        </>
    );
}

export default NoteHeader;
