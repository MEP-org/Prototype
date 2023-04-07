import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import AssignmentTab from "./AssignmentTab";
import { ExercicesAPI } from "../../../api/ExercicesAPI";
import Banner from "./Banner";
import { Assignment as AssignmentInit } from "../../../model/Assignment";


export default function Assignment(){

    const { assignmentId } = useParams();
    const [loading, setLoading] = useState(false);
    const [assignment, setAssignment] = useState(AssignmentInit);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAssignment((prevAssignment) => ({ ...prevAssignment, [name]: value }));
    };

    useEffect(() => {
        setLoading(true);
        const studentID = 100001;
        ExercicesAPI.getAssignmentById(studentID)
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
                <AssignmentTab assignment={assignment} handleChange={handleChange} loading={loading} />
            </div>
        </>
    )
}
