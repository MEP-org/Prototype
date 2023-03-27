import {FaPlusCircle} from 'react-icons/fa'

export default function AddStudentButton(){

    return (
        <>
                
            <div className=' bottom-0 left-0 z-10 card flex center px-3 py-2'>
                Add student
                <div className='card p-2 ml-2'>
                    <FaPlusCircle />
                </div>
            </div>
        </>
    )
}
