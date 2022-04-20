import React, {useEffect, useState} from 'react';
import './App.css';
import {fetchAllNotes} from "./api/notesApi";
import Notes from "./components/Notes";
import NoteHeader from "./components/NoteHeader";
import NoteCreator from "./components/NoteCreator";

function App() {

    const [notes, setNotes] = useState([]);
    const [totalNumberOfNotes, setTotalNumberOfNotes] = useState(0);
    const [refreshFlag, setRefreshFlag] = useState(true);
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const triggerRefresh = () => {
        setRefreshFlag(!refreshFlag);
    };

    useEffect(() => {
        fetchAllNotes(pageNumber)
            .then(response => {
                setNotes(response.content);
                setTotalNumberOfNotes(response.totalElements);
                setTotalPages(response.totalPages);
            })
    }, [refreshFlag, pageNumber]);

    const changePage = (pageRequest) => {
        if (pageRequest === 'previous' && pageNumber !== 0) {
            setPageNumber(pageNumber - 1);
        } else if (pageRequest === 'next' && pageNumber < totalPages - 1) {
            setPageNumber(pageNumber + 1);
        }
    };

  return (
      <div className='background'>
          <div className='arrow-icon' onClick={() => changePage('previous')}>
              ←
          </div>
          <div className='container'>
              <NoteHeader totalNumberOfNotes={totalNumberOfNotes}/>
              <Notes notes={notes} triggerRefresh={triggerRefresh}/>
              <NoteCreator triggerRefresh={triggerRefresh}/>
          </div>
          <div className='arrow-icon' onClick={() => changePage('next')}>
              →
          </div>
      </div>
  );
}

export default App;
