import React, { useEffect, useState, useCallback } from "react"
import MyNav from '../ProfessorNav'
import Banner from './Banner';
import MyClasses from './MyClasses';
import { ClassesAPI } from "../../../api/ClassesAPI";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import options from './options.json'


function Classes(){

    const particlesInit = useCallback(async engine => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);

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
            <div className='container py-8 bg-white dark:bg-gray-900'>
                <Banner />
                <div className='h-8'></div>
                <MyClasses classes={classes} loading={loading} />
            </div>
            <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />
        </>
    )
}

export default Classes