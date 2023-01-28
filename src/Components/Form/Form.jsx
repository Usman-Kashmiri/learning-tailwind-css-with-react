import React, { useRef, useState } from 'react'
import './Form.css'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { FormSchema } from './FormSchema';

function Form(props) {

    const navigate = useNavigate();

    var inputFieldClasses = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500",
    inputFieldErrorClasses = "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-red-700",
    btnClasses = "bg-green-500 hover:bg-green-600 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center shadow";

    const initialFormValues = {
        note_title: "",
        note_description: "",
        category: "",
    };

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
        dirty,
        setValue
    } = useFormik({
        initialValues: initialFormValues,
        validationSchema: FormSchema,
        onSubmit: async (values, actions) => {
            //   props.UpdateContactListHandler();
            actions.resetForm();
            navigate('/');
        }
    });

    return (
        <>
            <div className='flex justify-center items-center flex-col gap-5 w-full max-w-xs row-auto'>
                <h2 className='font-bold text-slate-800 text-2xl'>Add a Note</h2>
                <form className='bg-white w-full shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='note_title'>Note Title:</label>
                        <input type='text' name='note_title' id='note_title' placeholder='Enter Note Title' value={values.note_title} onBlur={handleBlur} onChange={handleChange} className={errors.note_title && touched.note_title ? inputFieldErrorClasses : inputFieldClasses} />
                        {(errors.note_title && touched.note_title) ? <span style={{ color: "red" }}>{errors.note_title}</span> : null}
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='note_description'>Note Description:</label>
                        <textarea type='text' name='note_description' id='note_description' placeholder='Enter Note Description' value={values.note_description} onBlur={handleBlur} onChange={handleChange} className={errors.note_description && touched.note_description ? inputFieldErrorClasses + " resize-none" : inputFieldClasses + " resize-none"} ></textarea>
                        {(errors.note_description && touched.note_description) ? <span style={{ color: "red" }}>{errors.note_description}</span> : null}
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='category'>Note Category:</label>
                        <input type='text' name='category' id='category' placeholder='Enter Note Category' value={values.category} onBlur={handleBlur} onChange={handleChange} className={errors.category && touched.category ? inputFieldErrorClasses : inputFieldClasses} />
                        {(errors.category && touched.category) ? <span style={{ color: "red" }}>{errors.category}</span> : null}
                    </div>
                    <button type='submit' disabled={!(isValid && dirty)} className={ !(isValid && dirty) ? btnClasses + " cursor-not-allowed" : btnClasses + " cursor-pointer"}>Add Note</button>
                </form>
            </div>
        </>
    )
}

export default Form