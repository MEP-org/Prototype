import React, {useState, useEffect} from 'react'
import ProfNav from '../Professor/ProfessorNav'
import StudentNav from '../Student/StudentNav'
import {ExercicesAPI} from "../../api/ExercicesAPI";
import Banner from './Banner';
import Filters from './Filters';
import Results from './Results';


function PublicExercices(props){

    const MyNav = props.user === 'professor' ? ProfNav : StudentNav

    const [filter, setFilter] = useState({
        'title': '',
        'minSize': 0,
        'maxSize': 100000,
        'prof': 'all',
        'sort': 'recent'
    });

    const [loading, setLoading] = useState(false);
    const [exercices, setExercices] = useState([]);

    useEffect(() => {
        setLoading(true);
        ExercicesAPI.getPublic()
        .then((data) => {
            setExercices(data);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [filter]);

    const profs = []

    return (
        <>
            <MyNav active="publicExercices"/>
            <div className='container py-8'>
                <Banner />
                <div className='mb-10' />
                <Filters filter={filter} setFilter={setFilter} profs={profs}/>
                <div className='mb-10' />
                <Results exercices={exercices} loading={loading} />
            </div>
        </>
    )
}

export default PublicExercices