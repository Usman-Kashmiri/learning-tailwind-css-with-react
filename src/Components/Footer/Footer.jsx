import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
            <footer className='w-full bg-white shadow-sm p-3 z-10'>
                <div className='flex justify-center items-center'>
                    <span className='text-xl capitalize text-center max-sm:text-lg'>This React App is Designed & Developed By: <a className='font-bold text-blue-600 hover:underline' target='_blank' rel='noreferrer noopener' href='https://usman-kashmiri.github.io/Kashmiri.Dev/'>Usman Kashmiri</a> </span>
                </div>
            </footer>
        </>
    )
}

export default Footer