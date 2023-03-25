import React, { useEffect, useState } from "react"
import MyNav from '../ProfessorNav'
import AddClass from './AddClass';
import MyClasses from './MyClasses';
import { ClassesAPI } from "../../../api/ClassesAPI";


function Classes(){

    const [loading, setLoading] = useState(false);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        setLoading(true);
        const profId = 1;
        ClassesAPI.getByProfessor(profId)
        .then((data) => {
            setClasses(data);
        })
        .finally(() => {
            setLoading(false);
        })
    }, []);

    return (
        <>
            <MyNav active='classes'/>
            <div className='w-full container mt-8'>
                <AddClass />
                <div className='h-8'></div>
                <MyClasses classes={classes} loading={loading} />
            </div>
        </>
    )
}

export default Classes