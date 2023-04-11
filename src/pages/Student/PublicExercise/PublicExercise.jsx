import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import AssignmentTab from "./AssignmentTab";
import { ExercicesAPI } from "../../../api/ExercicesAPI";
import Banner from "./Banner";
import { PublicExercice as PublicExerciseInit } from "../../../model/PublicExercise";


export default function PublicExercise(){

    const { exerciseId } = useParams();
    const [loading, setLoading] = useState(false);
    const [publicExercise, setPublicExercise] = useState(PublicExerciseInit);


    useEffect(() => {
        setLoading(true);
        ExercicesAPI.getAssignmentById(exerciseId)
        .then((data) => {
            setAssignment(data);
        })
        .finally(() => {
            setLoading(false);
        })
    }, []);

    
    return (
        <>
            <div className='w-full container mt-8'>
                <Banner assignment={assignment} loading={loading} />
                <AssignmentTab assignment={assignment} loading={loading} />
            </div>
        </>
    )
}
