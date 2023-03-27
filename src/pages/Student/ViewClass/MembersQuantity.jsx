import { FaUserFriends } from 'react-icons/fa'

export default function MembersQuantity(props){
    
        return (
            <>
                <div className="w-full flex">
                    <FaUserFriends className='inline-block mr-2' size={22} />
                    <span className="inline-block">{props.quantity} members</span>
                </div>
            </>
        )


    
}
