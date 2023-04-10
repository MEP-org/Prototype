import {FaPlusCircle, FaEye} from 'react-icons/fa'
import { Button } from 'flowbite-react'
import {Link} from 'react-router-dom'

export default function Banner(){

    return (
        <>
            <div className='grid grid-cols-3'>
                <div className='col-span-2'>
                    <div className='font-bold text-5xl mb-4'>
                        Exercices
                    </div>
                    <div className='text-lg'>
                        Exercices are used to evaluate the performance of your students.
                        <br />
                        Here you can see or create your exercices, or see the available metrics.
                    </div>
                </div>

                <div className='flex justify-end items-end'>
                    <div>
                        <Link to='/professor/metrics'>
                            <Button className='dark:bg-gray-800' color='light'>
                                <div className='w-40 text-center'>Available metrics</div>
                                <FaEye />
                            </Button>
                        </Link>
                        <div className='mt-4' />
                        <Link to='/professor/exercices/add'>
                            <Button className='dark:bg-gray-800' color='light'>
                                <div className='w-40 text-center'>Create a new exercice</div>
                                <FaPlusCircle />
                            </Button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
