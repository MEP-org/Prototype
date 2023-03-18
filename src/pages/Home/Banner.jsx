import React from 'react'
import banner from '../../assets/images/banner.png'
import { Button } from 'flowbite-react'
import { Link } from "react-router-dom";

function Banner(){


    return (
        <>

            <div className='grid grid-cols-2 gap-7 items-center mt-12'>
                <div>
                    <p className='font-extrabold text-5xl mb-3'>MepML</p>
                    <p className='font-norma text-base mb-4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et mollis sem, sollicitudin facilisis massa. Quisque et scelerisque arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nisi ut dolor consectetur finibus. Etiam varius est eget dictum mollis. Vivamus feugiat felis eu neque efficitur elementum. Integer vestibulum consequat erat vel ornare.</p>
                    <Link to="/signin">
                        <Button className='w-60'>Start using now</Button>
                    </Link>
                </div>
                <div className='p-10'>
                    <img src= {banner} alt="MepML Logo"/>
                </div>
            </div>
        </>
    )
}

export default Banner
  