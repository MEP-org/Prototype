import React from 'react'
import {FaPlusCircle} from 'react-icons/fa'


function ImportClassButton(){

    return (
        <>
                
            <div className=' bottom-0 left-0 z-10 card flex center px-3 py-2'>
                Import
                <div className='card p-2 ml-2'>
                    <FaPlusCircle />
                </div>
            </div>
        </>
    )
}



export default ImportClassButton