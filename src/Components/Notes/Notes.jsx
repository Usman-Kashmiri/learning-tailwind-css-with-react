import React from 'react'
import { Link } from 'react-router-dom'
import Note from './Note'
import './Notes.css'

function Notes(props) {

    const renderNotes = props.notes.map((note, index) => {
        return (
            <Note noteValues={note} key={index}/>
        );
    })

    return (
        <>
            <div className='flex flex-col items-center mt-4 w-full'>
                <Link to="/addNote">
                    <button className='bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center shadow'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                        <span className='ml-2'>Notes</span>
                    </button>
                </Link>
                <h2 className='mt-4 text-2xl font-bold text-center underline text-slate-700'>Notes:</h2>

                <div className='grid grid-cols-3 my-8 gap-6 w-full'>
                    {renderNotes}
                </div>
            </div>
        </>
    )
}

export default Notes