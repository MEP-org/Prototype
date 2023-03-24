import React from 'react'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'


function Banner(){


    return (
        <div className='flex items-center justify-center fixed top-0 left-0 w-full h-full'>
            <div className='sm:w-3/4 xl:w-2/4 px-10'>
                <p className='text-white font-extrabold text-6xl mb-3'>MepML</p>
                <p className='text-white font-norma text-base mb-4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et mollis sem, sollicitudin facilisis massa. Quisque et scelerisque arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nisi ut dolor consectetur finibus. Etiam varius est eget dictum mollis. Vivamus feugiat felis eu neque efficitur elementum. Integer vestibulum consequat erat vel ornare.</p>
                <Link to="/signin">
                    <Button className='w-60 mt-6'>Start using now</Button>
                </Link>
            </div>
        </div>
    )
}

export default Banner
  