import React from 'react'
import { useFormik } from 'formik';
import { useLocation, useNavigate } from "react-router-dom";
import { FormSchema } from './FormSchema';
import GoBackBtn from '../GoBackBtn';

function EditNote(props) {

  const location = useLocation();
  const navigate = useNavigate();
  const { note_id, note_title, note_description, category } = location.state.noteDetails;

  var inputFieldClasses = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500",
    inputFieldErrorClasses = "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-red-700",
    btnClasses = "bg-zinc-500 text-white font-bold py-2 px-4 rounded inline-flex items-center shadow";

  // console.log(note_id);

  const initialFormValues = {
    note_id: note_id,
    note_title: note_title,
    note_description: note_description,
    category: category,
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
    onSubmit: async (values) => {
      props.editNoteHandler(values);
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
            <div className='flex justify-end'>
              <select defaultValue={category} name='category' id='category' onBlur={handleBlur} onChange={handleChange} className={errors.category && touched.category ? inputFieldErrorClasses + " block pr-8" : inputFieldClasses}>
                <option disabled>Select a Note Category</option>
                {
                  props.category_options.map((option, index)=> {
                    return (<option value={option} key={index}>{option}</option>)
                  })
                }
              </select>
              <div className="pointer-events-none absolute flex justify-end items-center px-2 text-gray-700 mt-2">
                <svg className="fill-current h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            {(errors.category && touched.category) ? <span style={{ color: "red" }}>{errors.category}</span> : null}
          </div>
          <div className='flex justify-end'>
            <button type='submit' disabled={!(isValid && dirty)} className={!(isValid && dirty) ? btnClasses + " disabled:opacity-50 cursor-not-allowed" : btnClasses + " cursor-pointer hover:bg-zinc-600"}>Update Note</button>
          </div>
        </form>
        <GoBackBtn />
      </div>
    </>
  )

}

export default EditNote