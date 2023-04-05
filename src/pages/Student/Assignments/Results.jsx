import { Spinner } from 'flowbite-react';
import { FaFileAlt } from 'react-icons/fa';
import AssignmentCard from './AssignmentCard';

export default function Results(props){

    const {exercices, loading, filter} = props;

    const renderLoading = () => {
        return (
            <div className='w-fit mx-auto '>
                <Spinner size='xl' />
            </div> 
        )
    }

    const noResults = () => {
        return (
            <>
                <div className=' font-bold text-xl text-center'>
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
                <div>
                    <div className='grid lg:grid-cols-2 gap-4'>
                        {filteredExercices.map((exercice) => {
                            return (
                                <AssignmentCard exercice={exercice} key={exercice.id} />
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div >
                <div className='font-semibold text-3xl mb-10 flex items-center'>
                    <FaFileAlt className='inline-block mr-2' size={25} />
                    Assignments
                </div>
            </div>
            {loading ? renderLoading() : renderExercices()}
        </>
    )
}
