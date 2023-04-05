import { useLocation } from "react-router-dom";
import ImportClassButton from './ImportClassButton.jsx';
import AddStudentButton from './AddStudentButton.jsx';
import StudentsTable from './StudentsTable.jsx';
import MembersQuantity from './MembersQuantity.jsx';

export default function ManageClass(){

    const location = useLocation();
    const {class : myClass} = location.state || {class : null};
    console.log(myClass);

    return (
        <>
            <div className='w-full container mt-8'>
                    <div className='font-bold text-5xl mb-4'>
                        Classe {myClass.name}
                    </div>
                    <div className='relative flex'>
                        <ImportClassButton />
                        <div className='w-4'></div>
                        <AddStudentButton />
                    </div>
                    <div className='h-12'></div>
                    <MembersQuantity quantity={myClass.students.length} />
                    <div className='h-4'></div>
                    <StudentsTable myClass={myClass.students} />
            </div>
        </>
    )
}
