import {FaPlusCircle} from 'react-icons/fa'
import { Button } from 'flowbite-react'
import {Link} from 'react-router-dom'

export default function Banner(){

    return (
        <>
            <div className='grid grid-cols-3'>

                <div className='col-span-2'>
                    <div className='font-bold text-5xl mb-4'>
                        Classes
                    </div>
                    <div className='text-lg mb-4 text-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <p/>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                    </div>
                </div>

                <div className='flex justify-end items-end'>
                    <Link to='/professor/classes/add'>
                        <Button className='dark:bg-gray-800' color='light'>
                            <div className='w-40 text-center'>Create a new class</div>
                            <FaPlusCircle />
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
