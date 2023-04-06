import { useState, useEffect } from 'react'
import Banner from './Banner';
import Filters from './Filters';
import Results from './Results';
import { ExercicesAPI } from "../../../api/ExercicesAPI";

export default function Exercices(){

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
