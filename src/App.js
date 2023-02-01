import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import AddNote from './Components/Forms/AddNote';
import EditNote from './Components/Forms/EditNote';
import DeleteNote from './Components/Forms/DeleteNote';
import Header from './Components/Header/Header';
import Notes from './Components/Notes/Notes';
import Note from './Components/Notes/Note';
import { useEffect, useState } from 'react';

function App() {

  // Local storage key to retrive stored values:
  const LOCAL_STORAGE_KEY = "Notes";

  // const retriveNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  const [notes, setNotes] = useState(() => {
    // getting stored value:
    const initialValues = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return initialValues || [];
  });

  const addNoteHandler = (note) => {
    // console.log(note);
    setNotes([...notes, note]);
    // console.log(notes);
  }

  const editNoteHandler = (newNote) => {
    // console.log(newNote);
    setNotes(
      notes.map((note) => {
        return note.note_id === newNote.note_id ? newNote : note;
      })
    );
  }

  const deleteNoteHandler = (note_id) => {
    const newNotesList = notes.filter((note) => {
      return note.note_id !== note_id;
    })
    // console.log(newNotesList);
    setNotes(newNotesList);
  }

  // storing notes in local storage:
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <div className='bg-stone-50'>
        <Header />
        <main className='container mx-auto px-4 flex flex-col justify-center items-center gap-3'>
          <Routes>
            <Route path='/' element={<Notes notes={notes} />}></Route>
            <Route path='/addNote' element={<AddNote addNoteHandler={addNoteHandler} />}></Route>
            <Route path='/editNote' element={<EditNote editNoteHandler={editNoteHandler} />}></Route>
            <Route path='/deleteNote' element={<DeleteNote deleteNoteHandler={deleteNoteHandler} />}></Route>
            <Route path='/note' element={<Note />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
