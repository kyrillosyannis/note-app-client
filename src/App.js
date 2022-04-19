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

    const triggerRefresh = () => {
        setRefreshFlag(!refreshFlag);
    };

    useEffect(() => {
        fetchAllNotes()
            .then(response => {
                setNotes(response.content);
                setTotalNumberOfNotes(response.totalElements);
            })
    }, [refreshFlag]);

  return (
      <div className='background'>
          <div className='container'>
              <NoteHeader totalNumberOfNotes={totalNumberOfNotes}/>
              <Notes notes={notes} triggerRefresh={triggerRefresh}/>
              <NoteCreator triggerRefresh={triggerRefresh}/>
          </div>
      </div>
  );
}

export default App;
