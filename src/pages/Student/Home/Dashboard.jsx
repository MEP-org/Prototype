import {Spinner, Card} from 'flowbite-react';
import {FaCheckCircle, FaFileAlt, FaHourglassHalf, FaGraduationCap} from 'react-icons/fa'


export default function Dashboard(props){

    const {stats, loading} = props;

    const renderLoading = () => {
        return (
            <Card data-aos='fade-up' className='mt-4 mb-8 delay-200'>
                <div className='w-fit mx-auto'>
                    <Spinner size='xl' />
                </div> 
            </Card>
        )
    }

    const renderStats = () => {

        return (
            <>
            <Card className='mt-4 mb-8'>
                <div className="grid sm:grid-cols-2 lg:sm:grid-cols-4 gap-8">

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
            </Card>
            </>
        );
    }

    return (
        <>
            <p data-aos='fade-up' className="font-bold text-4xl delay-100">Welcome, Jack Connor!</p>

            {loading ? renderLoading() : renderStats()}

        </>
    )
}