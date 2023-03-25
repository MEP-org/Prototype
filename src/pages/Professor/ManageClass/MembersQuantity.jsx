import React from 'react'
import { FaUserFriends } from 'react-icons/fa'

function MembersQuantity(props){
    
        return (
            <>
                <div className="w-full flex">
                    <FaUserFriends className='inline-block mr-2' size={22} />
                    <span className="inline-block">{props.quantity} members</span>
                </div>
            </>
        )


    
}


export default MembersQuantity