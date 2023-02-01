import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import GoBackBtn from '../GoBackBtn';

function DeleteNote( {deleteNoteHandler} ) {

    const [showModal, setShowModal] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const { note_id, note_title} = location.state.noteDetails;

    const confirmDelete = (note_id) => {
        deleteNoteHandler(note_id)
        navigate('/');
    }

    return (
        <>
            <div>
                <h2>Are your sure you want to delete {note_title} permenantly?</h2>
                <div className='flex gap-5 my-6 justify-center'>
                    <button type="button" onClick={() => setShowModal(true)} className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center shadow'>Delete Note</button><GoBackBtn />
                </div>
                {showModal ? (
                    <>
                        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                        <h3 className="text-3xl font-thin uppercase">Paka paka confirm bata...!</h3>
                                        <button onClick={() => setShowModal(false)} className="bg-transparent border-0 float-right">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-zinc-400 w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="relative p-6 flex-auto">
                                        <h3 className="text-2xl font-semibold text-center">Han ustad phir {note_title} delete krdun?</h3>
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button onClick={() => setShowModal(false)} className="text-zinc-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1" type="button">
                                            Chor rahne de, Changed my mind
                                        </button>
                                        <button onClick={() => confirmDelete(note_id)} className="text-white bg-red-500 active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" >
                                            Arey han bhai delete kr...
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </>
    )
}

export default DeleteNote