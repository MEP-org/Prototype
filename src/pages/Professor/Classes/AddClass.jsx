import React from 'react'
import {FaPlusCircle} from 'react-icons/fa'

function AddClass(){

    return (
        <>
            <div data-aos='fade-up' className='w-full relative'>
                <div className='font-bold text-5xl mb-4'>
                    Classes
                </div>
                <div className='text-xl mb-4 w-1/2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <p/>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti quos
                </div>

                <div className='bottom-0 right-0 absolute z-10 card flex center px-3 py-2'>
                    Create a new class
                    <div className='card p-2 ml-2'>
                        <FaPlusCircle />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddClass