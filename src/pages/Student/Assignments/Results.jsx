import { Spinner } from 'flowbite-react';
import { FaFileAlt } from 'react-icons/fa';
import AssignmentCard from './AssignmentCard';

export default function Results(props){

    const {assignments, loading, filter} = props;

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

    const assignmentFilter = (assignment) => {
        // TODO: Implement filter
        console.log(filter, assignment);
        return assignment.id >= 1;
    }   

    const renderAssignments = () => {
        let filteredAssignments = assignments.filter(assignmentFilter);

        if(filteredAssignments.length === 0){
            return noResults();
        }

        // TODO: Implement sort

        return (
            <>
                <div className='grid lg:grid-cols-2 gap-4'>
                    {filteredAssignments.map((assignment) => {
                        return (
                            <AssignmentCard assignment={assignment} key={assignment.id} />
                        )
                    })}
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
            {loading ? renderLoading() : renderAssignments()}
        </>
    )
}
