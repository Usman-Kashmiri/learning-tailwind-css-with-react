import './App.css';
import { Route, Routes, useParams, useNavigate } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Notes from './Components/Notes/Notes';
import Note from './Components/Notes/Note';

function App() {
  return (
    <>
      <div className='bg-stone-50'>
        <Header />
        <main className='container mx-auto px-4 flex flex-col justify-center items-center gap-3'>
          <Routes>
            <Route path='/' element={<Notes />}></Route>
            <Route path='/addNote' element={<Form />}></Route>
            <Route path='/note' element={<Note />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
