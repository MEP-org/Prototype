import {FaPlusCircle} from 'react-icons/fa'
import { Button } from 'flowbite-react'

export default function Banner(){

    return (
        <>
            <div className='w-full relative fadeInUp'>
                <div className='font-bold text-5xl mb-4'>
                    Classes
                </div>
                <div className='text-lg mb-4 lg:w-1/2 text-justify'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <p/>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti quos
                </div>

                <Button className='bottom-0 right-0 absolute dark:bg-gray-800' color='light'>
                    Create a new class
                    <div className='ml-2'>
                        <FaPlusCircle />
                    </div>
                </Button>
            </div>
        </>
    )
}
