import React, { useEffect, useState } from "react"
import MyNav from '../StudentNav'
import { ClassesAPI } from "../../../api/ClassesAPI";
import Classes from "./Classes";
import Intro from "./Intro";

// temporary data
import {student_stats} from '../../../api/data.json';


function Home(){

    const [loadingStats, setLoadingStats] = useState(false);
    const [loadingClasses, setLoadingClasses] = useState(false);
    const [classes, setClasses] = useState([]);
    const [stats, setStats] = useState(student_stats);

    useEffect(() => {
        setLoadingStats(true);
        setLoadingClasses(true);
        const studentID = 100001;
        ClassesAPI.getByStudent(studentID)
        .then((data) => {
            //TODO: get student stats
            setClasses(data);
        })
        .finally(() => {
            setLoadingClasses(false);
            setLoadingStats(false);
        })
    }, []);

    return (
        <>
            <MyNav active="home"/>

            <div className='w-full container mt-8'>
                <Intro stats={stats} loading={loadingStats}/>
                <Classes classes={classes} loading={loadingClasses} />
            </div>
        </>
    )
}

export default Home