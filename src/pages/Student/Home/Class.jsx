import React from "react"
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaUser, FaUserFriends } from "react-icons/fa";


function Class(props){

    const item = props.item;
    const navigate = useNavigate();

    const handleClassClick = (item) => {
        navigate('/professor/manageClass', {state : {class : item}})
    }


    return (
        <div className="card" data-aos='fade-up'>
            
            <div className="text-center">
                <p className="text-2xl font-semibold my-4">{item.name}</p>
                <hr className="h-px mb-5 bg-gray-200 border-0 dark:bg-gray-700"/>            
            </div>

            <div className="flex justify-between items-end">
                <div>
                    <div className="text-gray-500">
                        <FaUser className='inline-block mr-2' size={12}  />
                        <span className="inline-block text-xs font-light">Prof. {item.professor.name}</span>
                    </div>

                    <div className="text-gray-500">
                        <FaUserFriends className='inline-block mr-2' size={15} />
                        <span className="inline-block text-xs font-light">{item.memberCount} members</span>
                    </div>
                </div>


                <div>
                    <div className="my-btn h-10 w-10" onClick={() => handleClassClick(item)}>
                        <FaArrowRight/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Class