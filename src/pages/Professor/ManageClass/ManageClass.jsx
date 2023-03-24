import React from 'react'
import { useLocation } from "react-router-dom";

function ManageClass(){

    const location = useLocation();
    const {class : myClass} = location.state || {class : null};
    console.log(myClass);

    return (
        <>
            <h1>ManageClass</h1>
            {JSON.stringify(myClass, null, 2)}
        </>
    )
}

export default ManageClass