import React from 'react'
import { Spinner } from 'flowbite-react';
import { FaBook } from 'react-icons/fa';
import ExerciceCard from './ExerciceCard';

function Results(props){

    const {exercices, loading, filter} = props;

    const renderLoading = () => {
        return (
            <div data-aos='fade-up' className='w-fit mx-auto delay-200'>
                <Spinner size='xl' />
            </div> 
        )
    }

    const noResults = () => {
        return (
            <>
                <div data-aos='fade-up' className='delay-200 font-bold text-xl text-center'>
                    No results found
                </div>
            </>
        )
    }

    const exercicesFilter = (exercice) => {
        // TODO: Implement filter
        console.log(filter, exercice);
        return exercice.id < 1
    }   

    const renderExercices = () => {
        let filteredExercices = exercices.filter(exercicesFilter);
        if(filteredExercices.length === 0){
            return noResults();
        }
        // TODO: Implement sort
        return (
            <>
                <div data-aos='fade-up' className='delay-200'>
                    <div className='grid grid-cols-12 gap-10'>
                        {filteredExercices.map((exercice) => {
                            return (
                                <ExerciceCard exercice={exercice} key={exercice.id} />
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div data-aos='fade-up' className='delay-100' >
                <div className='font-bold text-3xl mb-10'>
                    <FaBook className='inline-block mr-2' />
                    Exercices
                </div>
            </div>
            {loading ? renderLoading() : renderExercices()}
        </>
    )
}

export default Results