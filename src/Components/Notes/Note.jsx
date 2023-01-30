import React from 'react'
import './Notes.css'

function Note({noteValues}) {

    return (
        <>
            <div className='max-w-sm rounded overflow-hidden shadow-lg py-6 px-4 bg-white'>
                <div className='flex justify-end'>
                    <span className='inline-block bg-gray-200 rounded-full px-4 py-1 text-xs font-bold text-gray-700 mr-2 mb-2'>#{noteValues.category}</span>
                </div>
                <h2 className='font-bold text-xl mb-2'>{noteValues.note_title}</h2>
                <p className='text-gray-700 text-base'>{noteValues.note_description}</p>
            </div>
        </>
    )
}

export default Note