import React from 'react'
import './Form.css'
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { FormSchema } from './FormSchema';
import GoBackBtn from '../GoBackBtn';

function Form(props) {

    const navigate = useNavigate();

    var inputFieldClasses = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500",
        inputFieldErrorClasses = "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-red-700",
        btnClasses = "bg-green-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center shadow";

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
        dirty
    } = useFormik({
        initialValues: initialFormValues,
        validationSchema: FormSchema,
        onSubmit: async (values, actions) => {
            await props.addNoteHandler(values);
            actions.resetForm();
            navigate('/');
        }
    });

    return (
        <>
            <div className='flex justify-center items-center flex-col gap-3 w-full max-sm:px-2'>
                <h2 className='font-bold text-slate-800 text-2xl'>Add a Note</h2>
                <form className='bg-white flex-auto max-lg:w-2/3 max-2xl:w-2/5 max-sm:w-full shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit} autoComplete="off">
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='note_title'>Note Title:</label>
                        <input type='text' name='note_title' id='note_title' placeholder='Enter Note Title' value={values.note_title} onBlur={handleBlur} onChange={handleChange} className={errors.note_title && touched.note_title ? inputFieldErrorClasses : inputFieldClasses} />
                        {(errors.note_title && touched.note_title) ? <span style={{ color: "red" }}>{errors.note_title}</span> : null}
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='note_description'>Note Description:</label>
                        <textarea rows={6} type='text' name='note_description' id='note_description' placeholder='Enter Note Description' value={values.note_description} onBlur={handleBlur} onChange={handleChange} className={errors.note_description && touched.note_description ? inputFieldErrorClasses + " resize-none" : inputFieldClasses + " resize-none"} ></textarea>
                        {(errors.note_description && touched.note_description) ? <span style={{ color: "red" }}>{errors.note_description}</span> : null}
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='category'>Note Category:</label>
                        <input type='text' name='category' id='category' placeholder='Enter Note Category' value={values.category} onBlur={handleBlur} onChange={handleChange} className={errors.category && touched.category ? inputFieldErrorClasses : inputFieldClasses} />
                        {(errors.category && touched.category) ? <span style={{ color: "red" }}>{errors.category}</span> : null}
                    </div>
                    <div className='flex justify-end'>
                        <button type='submit' disabled={!(isValid && dirty)} className={!(isValid && dirty) ? btnClasses + " disabled:opacity-50 cursor-not-allowed" : btnClasses + " cursor-pointer hover:bg-green-600"}>Add Note</button>
                    </div>
                </form>
                <GoBackBtn />
            </div>
        </>
    )
}

export default Form