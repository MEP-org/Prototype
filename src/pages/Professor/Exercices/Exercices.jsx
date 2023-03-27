import { useState, useEffect } from 'react'
import MyNav from '../ProfessorNav'
import Banner from './Banner';
import Filters from './Filters';
import Results from './Results';
import { ExercicesAPI } from "../../../api/ExercicesAPI";
import ExerciceCard from './ExerciceCard';

export default function Exercices(){

    const exercisesMock = [
        {
            "id": 1,
            "title": "Titanic - Machine Learning from Disaster",
            "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
            "published": "2023-04-01",
            "deadline": "2023-05-01",
            "visible": false,
            "totalAnswers": 10,
            "maxAnswers": 50,
            "maxAttempts": 3,
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
            "visible": true,
            "totalAnswers": 10,
            "maxAnswers": 50,
            "maxAttempts": 3,
            "studentClass": {
                "id": 3,
                "name": "TAA-C1"
            }
        }

    ] 

    const [filter, setFilter] = useState({
        'title': '',
        'filter': 'all',
        'sort': 'recent'
    });

    const [loading, setLoading] = useState(false);
    const [exercices, setExercices] = useState([]);

    useEffect(() => {
        setLoading(true);
        const profId = 1;
        ExercicesAPI.getByProf(profId)
        .then((data) => {
            setExercices(data);
        })
        .finally(() => {
            setLoading(false);
        })
    }, []);


    return (
        <>
            <MyNav active='exercices'/>
            <div className='container py-8'>
                <Banner />
                <div className='mb-10' />
                <Filters filter={filter} setFilter={setFilter} exercices={exercices}/>
                <div className='mb-10' />
                <Results exercices={exercices} loading={loading} filter={filter}/>


                {/* HOW TO USE THE CARD */}
                Just to see how they look like (delete later)
                <div className=''>
                    <ExerciceCard content={exercisesMock[0]} />
                    <ExerciceCard content={exercisesMock[1]} />
                </div>

            </div>

        </>
    )
}
