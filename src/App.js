import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import AddNote from './Components/Forms/AddNote';
import EditNote from './Components/Forms/EditNote';
import DeleteNote from './Components/Forms/DeleteNote';
import Header from './Components/Header/Header';
import Notes from './Components/Notes/Notes';
import Note from './Components/Notes/Note';
import { useEffect, useState } from 'react';
import NoteDetails from './Components/Notes/NoteDetails';

function App() {

  const [filter, setFilter] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);

  const location = useLocation()

  // Local storage key to retrive stored values:
  const LOCAL_STORAGE_KEY = "Notes";

  const [notes, setNotes] = useState(() => {
    // getting stored value:
    const initialValues = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return initialValues || [];
  });
  
  const category_options = ["Hisab Kitab","Udhar","Sodah Surf","Important","Berry Important","Personal","Berry Personal","Mamlaat"];

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

  // Filter Notes
  const filterHandler = (filter) => {
    console.log(filter);
    setFilter(filter)
    if (filter !== "") {
      const filteredNotes = notes.filter((note) => {
        return Object.values(note).join(" ").toLowerCase().includes(filter.toLowerCase());
      });
      setFilteredNotes(filteredNotes);
    } else {
      setFilteredNotes(notes);
    }
  }

  // storing notes in local storage:
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <div className='bg-stone-50 min-h-screen'>
        
        <Header />
        
        <main className='container mx-auto p-6 pb-5 flex flex-col justify-center items-center gap-3'>
          <Routes>
            <Route path='/' element={<Notes note_filters={category_options} notes={filter === "" ? notes : filteredNotes && filter === "all" ? notes : filteredNotes} filterHandler={filterHandler}/>}></Route>
            <Route path='/addNote' element={<AddNote addNoteHandler={addNoteHandler} />}></Route>
            <Route path='/editNote' element={<EditNote category_options={category_options} editNoteHandler={editNoteHandler} />}></Route>
            <Route path='/deleteNote' element={<DeleteNote deleteNoteHandler={deleteNoteHandler} />}></Route>
            <Route path='/note' element={<Note />}></Route>
            <Route path='/noteDetails' element={<NoteDetails />}></Route>
          </Routes>
        </main>

        {/* This will only render the footer on home page */}
        {location.pathname === '/' && <Footer />}
      </div>
    </>
  );
}

export default App;
