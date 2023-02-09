import React from 'react'
import { Link } from 'react-router-dom'
import Note from './Note'
import './Notes.css'
import img1 from '../../images/oups.gif'
import img2 from '../../images/bhai kya kr raha hai tu.jpg'
import img3 from '../../images/pyscho.jpg'
import img4 from '../../images/salay.png'
import img5 from '../../images/what are you looking for.jpg'

function Notes(props) {

    const renderNotes = props.notes.map((note, index) => {
        return (
            <Note noteValues={note} key={index} />
        );
    })

    const dice = [
        img1,
        img2,
        img3,
        img4,
        img5
    ]

    let randomIndex = Math.floor(Math.random() * dice.length);

    const handleFilters = (e) => {
        let val = e.target.value;
        props.filterHandler(val);
    }

    return (
        <>
            <div className='flex flex-col gap-4 items-center mt-4 w-full'>
                <Link to="/addNote">
                    <button className='bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center shadow'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                        <span className='ml-2'>Add Note</span>
                    </button>
                </Link>
                <h2 className='mt-4 text-2xl font-bold text-center underline text-slate-700'>Notes:</h2>

                <div className='flex justify-end self-end'>
                    <select onChange={handleFilters} name='category' defaultValue="default" id='category' className="mt-2 cursor-pointer shadow border w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-blue-500 block appearance-none pr-8 rounded leading-tight">
                        <option disabled value='default'>Filter Notes</option>
                        <option value='all'>All Notes</option>
                        {
                            props.note_filters.map((option, index) => {
                                return (<option value={option} key={index}>{option}</option>)
                            })
                        }
                    </select>
                    <div className="pointer-events-none absolute flex justify-end items-center px-2 text-gray-700 mt-2">
                        <svg className="fill-current h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
                {
                    renderNotes.length > 0 ?
                        <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 mt-2 mb-8 gap-6 w-full'>
                            {renderNotes}
                        </div>
                        : <>
                            <img src={dice[randomIndex]} alt='404' className='w-2/6' />
                            <h1 className='text-2xl font-bold text-red-500 capitalize'>404 - Notes not found, please make some notes...!</h1>
                        </>
                }
            </div>
        </>
    )
}

export default Notes