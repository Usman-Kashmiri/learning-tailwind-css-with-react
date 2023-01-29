import './App.css';
import { Route, Routes, useParams, useNavigate } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Notes from './Components/Notes/Notes';
import Note from './Components/Notes/Note';
import { useState } from 'react';

function App() {

  const [notes, setNotes] = useState([]);

  const addNoteHandler = (note) => {
    // console.log(note);
    setNotes([...notes, note]);
    console.log(notes);
  }

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
