import React from 'react'
import { useNavigate } from "react-router-dom";

const Category = () => {
    let navigate = useNavigate();
    return (
        <>
            <h1>Select your category</h1>
            <button onClick={()=>navigate("/numplayers")}>Go back</button>
            <button onClick={()=>navigate("/difficulty")}>Go to difficulty selection</button>
        </>
    )
}

export default Category;