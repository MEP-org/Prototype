import {FaPlusCircle} from 'react-icons/fa'

export default function Banner(){

    return (
        <>
            <div className='w-full relative'>
                <div className='font-bold text-5xl mb-4'>
                    Exercices
                </div>
                <div className='text-lg mb-4 lg:w-1/2 text-justify'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <p/>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti quos
                </div>

                <div className='bottom-0 right-0 absolute '>
                    <div className='flex center card px-3 py-2'>
                        Create a new Exercice
                        <div className='card p-2 ml-2'>
                            <FaPlusCircle />
                        </div>
                    </div>
                    <div className='flex center card mt-2 px-3 py-2'>
                        Create a new Metric
                        <div className='card p-2 ml-5'>
                            <FaPlusCircle />
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
