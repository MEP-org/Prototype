import {FaFileAlt} from 'react-icons/fa'

export default function ExercisesLabel(){

    return (
        <>
                
            <div className="w-full flex">
                <FaFileAlt className='inline-block mr-2' size={22} />
                <span className="inline-block">Exercises</span>
            </div>
            
        </>
    )
}


