import React from 'react';

const NoteHeader = ({totalNumberOfNotes}) => {

    return (
        <>
            <div className='note-header' data-testid='noteHeader'>You have {totalNumberOfNotes} todos</div>
        </>
    );
}

export default NoteHeader;
