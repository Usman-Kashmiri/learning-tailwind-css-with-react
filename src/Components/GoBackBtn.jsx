import React from 'react'
import { useNavigate } from 'react-router';


function GoBackBtn() {

    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} className={"font-bold py-2 px-4 rounded inline-flex items-center shadow bg-slate-700 text-white"}>Go Back</button>
    )
}

export default GoBackBtn