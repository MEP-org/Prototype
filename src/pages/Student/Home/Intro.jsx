import React from 'react'
import {Spinner} from 'flowbite-react';
import {FaCheckCircle, FaFileAlt, FaHourglassHalf, FaGraduationCap} from 'react-icons/fa'



function Intro(props){

    const {stats, loading} = props;

    const renderLoading = () => {
        return (
            <div data-aos='fade-up' className="student-stats m-5 mx-auto delay-200">
                <Spinner size='xl' />
            </div>
        )
    }

    const renderStats = () => {

        return (
            <>        
                <div className="student-stats mt-5 mb-8 grid sm:grid-cols-2 lg:sm:grid-cols-4 gap-8">

                    <div>
                        <div className="h-9 student-stats-sections">
                            <FaCheckCircle className='inline-block mr-2' />
                            <span className="inline-block font-semibold">Submissions</span>
                        </div>
                        <div className="h-24 flex justify-center items-center">
                            <div className="items-end">
                                <span className="font-semibold text-3xl mr-2">{stats.total_submissions}</span>
                                <span className="font-light text-sm">Exercises</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="h-9 student-stats-sections">
                            <FaFileAlt className='inline-block mr-2' />
                            <span className="inline-block font-semibold">Exercises</span>
                        </div>
                        <div className="h-24 flex justify-center items-center">
                            <div className="items-end">
                                <span className="font-semibold text-3xl mr-2">{stats.total_exercises}</span>
                                <span className="font-light text-sm">In total</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="h-9 student-stats-sections">
                            <FaHourglassHalf className='inline-block mr-2' />
                            <span className="inline-block font-semibold">Next Exercise</span>
                        </div>
                        <div className="h-24 flex justify-center items-center">
                            <div className="items-end">
                            <p className="font-light text-sm">{stats.next_exercise.name}</p>
                            <p className="font-semibold text-2xl mr-2">{stats.next_exercise.deadline}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="h-9 student-stats-sections">
                            <FaGraduationCap className='inline-block mr-2' />
                            <span className="inline-block font-semibold">Ranking</span>
                        </div>

                        <div className="h-24 flex justify-center items-center">
                            <div className="items-end">
                                <span className="font-light text-sm mr-2">Top</span>
                                <span className="font-semibold text-3xl">{stats.position}</span>
                            </div>
                        </div>
                    </div>
                
                </div>
            </>
        );
    }

    return (
        <>

            <p className="font-bold text-4xl">Welcome, Jack Connor!</p>

            {loading ? renderLoading() : renderStats()}

        </>
    )
}

export default Intro