import React from 'react'
import { Link } from 'react-router-dom'
import Note from './Note'
import './Notes.css'

function Notes(props) {

    const renderNotes = props.notes.map((note, index) => {
        return (
            <div key={index} className='max-w-sm rounded overflow-hidden shadow-lg py-6 px-4 bg-white'>
                <div className='flex justify-end'>
                    <span className='inline-block bg-gray-200 rounded-full px-4 py-1 text-xs font-bold text-gray-700 mr-2 mb-2'>#{note.category}</span>
                </div>
                <h2 className='font-bold text-xl mb-2'>{note.note_title}</h2>
                <p className='text-gray-700 text-base'>{note.note_description}</p>
            </div>
        );
    })

    return (
        <>
            <div className='flex flex-col items-center mt-4 w-full'>
                <Link to="/addNote">
                    <button className='bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center shadow'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                        <h2 className='ml-2'>Notes</h2>
                    </button>
                </Link>
                <h2 className='mt-4 text-2xl font-bold text-center underline text-slate-700'>Notes:</h2>

                <div className='grid grid-cols-3 my-8 gap-8 w-full'>
                    {renderNotes}
                </div>
            </div>
        </>
    )
}

export default Notes