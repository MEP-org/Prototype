import {FaPlusCircle} from 'react-icons/fa'

export default function Banner(){

    return (
        <>
            <div data-aos='fade-up' className='w-full relative'>
                <div className='font-bold text-5xl mb-4'>
                    Classes
                </div>
                <div className='text-lg mb-4 lg:w-1/2 text-justify'>
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
