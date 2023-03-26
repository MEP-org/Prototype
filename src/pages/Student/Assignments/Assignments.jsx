import React, { useState, useEffect } from 'react'
import MyNav from '../StudentNav'
import Banner from './Banner';
import Filters from './Filters';
import Results from './Results';
import { ExercicesAPI } from "../../../api/ExercicesAPI";
import AssignmentCard from './AssignmentCard';

function Assignments(){

    const exercisesMock = [
        {
            "id": 1,
            "title": "Titanic - Machine Learning from Disaster",
            "description": "Subtitle orem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit",
            "published": "2023-04-01",
            "deadline": "2023-05-01",
            "studentClass": {
                "id": 1,
                "name": "ML-C1"
            }
        },
        {
            "id": 2,
            "title": "Predicting a Biological Response",
            "description": "Subtitle orem ipsum dolor sit amet",
            "published": "2024-04-01",
            "deadline": "2025-05-01",
            "studentClass": {
                "id": 3,
                "name": "TAA-C1"
            }
        }

    ] 


    const [filter, setFilter] = useState({
        'title': '',
        'deadline': 'all',
        'filter': 'all',
        'sort': 'recent'
    });

    const [loading, setLoading] = useState(false);
    const [exercices, setExercices] = useState([]);

    useEffect(() => {
        setLoading(true);
        const studentId = 1;
        ExercicesAPI.getByStudent(studentId)
        .then((data) => {
            setExercices(data);
        })
        .finally(() => {
            setLoading(false);
        })
    }, []);


    return (
        <>
            <MyNav active="assignments"/>
            <div className='container py-8'>
                <Banner />
                <div className='mb-10' />
                <Filters filter={filter} setFilter={setFilter} exercices={exercices}/>
                <div className='mb-10' />
                <Results exercices={exercices} loading={loading} filter={filter}/>


                {/* HOW TO USE THE CARD */}
                Just to see how they look like (delete later)
                <div className='grid lg:grid-cols-2 gap-4'>
                    <div>
                        <AssignmentCard content={exercisesMock[0]} />
                    </div>

                    <div>
                        <AssignmentCard content={exercisesMock[1]} />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Assignments