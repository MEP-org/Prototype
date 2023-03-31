import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function Bannner(props) {

    const {exercice, loading} = props
    const navigate = useNavigate()

    const handleSubmit = () => {
        if (loading) return;
        console.log(exercice)
        if (exercice.id) {
            console.log('edit exercice')
        }
        else {
            console.log('create exercice')
        }
        navigate('/professor/exercices')
    }


    return (
        <>
            <div className="grid grid-cols-2 gap-4 my-4">
                <div>
                    <div className="font-bold text-4xl">
                        {exercice.id ? 
                            'View/Edit Exercice' : 
                            'Create new Exercice'
                        }
                    </div>
                    <div className="mt-2">
                        Exercices are used to train students on a specific topic or skill.
                        <br/>
                        You can create a new exercice or edit an existing one.
                    </div>
                    
                </div>
                
            
                <div className="flex justify-end items-end">
                    <Button onClick={handleSubmit} className='w-36'>
                        {exercice.id ? 'Save' : 'Create'}
                    </Button>
                    <div className="w-4"/>
                    <Button color='light' onClick={() => navigate('/professor/exercices')} className='w-36'>
                        Cancel
                    </Button>
                </div>
            </div>
        </>
    )
}