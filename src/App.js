import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Notes from './Components/Notes/Notes';
import Note from './Components/Notes/Note';
import { useEffect, useState } from 'react';

function App() {

  // Local storage key to retrive stored values:
  const LOCAL_STORAGE_KEY = "Notes";

  const [notes, setNotes] = useState(() => {
    // getting stored value:
    const retriveNotes = localStorage.getItem(LOCAL_STORAGE_KEY);
    const initialValue = JSON.parse(retriveNotes);
    return initialValue || [];
  });

  const addNoteHandler = (note) => {
    // console.log(note);
    setNotes([...notes, note]);
    // console.log(notes);
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  // useEffect(() => {
  //   const retriveNotes = JSON.parse(localStorage.getItem('notes'));
  //   if (retriveNotes) {
  //     setNotes(retriveNotes);
  //   }
  // }, []);

  return (
    <>
      <div className='bg-stone-50'>
        <Header />
        <main className='container mx-auto px-4 flex flex-col justify-center items-center gap-3'>
          <Routes>
            <Route path='/' element={<Notes notes={notes} />}></Route>
            <Route path='/addNote' element={<Form addNoteHandler={addNoteHandler} />}></Route>
            <Route path='/note' element={<Note />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
