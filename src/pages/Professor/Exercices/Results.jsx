import { Spinner } from 'flowbite-react';
import { FaFileAlt } from 'react-icons/fa';
import ExerciceCard from './ExerciceCard';

export default function Results(props){

    const {exercices, loading, filter} = props;

    const renderLoading = () => {
        return (
            <div className='w-fit mx-auto'>
                <Spinner size='xl' />
            </div> 
        )
    }

    const noResults = () => {
        return (
            <>
                <div className='font-bold text-xl text-center'>
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
                    {filteredExercices.map((exercice) => {
                        return (
                            <ExerciceCard exercice={exercice} key={exercice.id} />
                        )
                    })}
                </div>
            </>
        )
    }

    return (
        <>
            <div>
                <div className='font-semibold text-3xl mb-10 flex items-center'>
                    <FaFileAlt className='mr-2' size={25} />
                    Exercices
                </div>
            </div>
            {loading ? renderLoading() : renderExercices()}
        </>
    )
}
