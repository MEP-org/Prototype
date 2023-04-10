import { useState, useEffect } from 'react';
import Banner from './Banner';
import Filters from './Filters';
import Results from './Results';
import { ExercicesAPI } from "../../../api/ExercicesAPI";
import AssignmentCard from './AssignmentCard';

export default function Assignments(){

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
            <div className='container py-8'>
                <Banner />
                <div className='mb-10' />
                <Filters filter={filter} setFilter={setFilter} exercices={exercices}/>
                <div className='mb-10' />
                <Results exercices={exercices} loading={loading} filter={filter}/>
            </div>
        </>
    )
}
