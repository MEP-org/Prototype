import React from 'react'
import {FaUserFriends} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

function MyClasses(props){

    const {classes, loading} = props;
    const navigate = useNavigate();

    const handleClassClick = (item) => {
        navigate('/professor/manageClass', {state : {class : item}})
    }

    const renderLoading = () => {
        return (
            <div className='card p-4 mb-4 delay-200' data-aos='fade-up' >
                Loading...
            </div>
        )
    }

    const renderClasses = () => {
        return classes.map((item) => {
            return (
                <div data-aos='fade-up' className='card p-4 mb-4 delay-200'
                key={item.id} onClick={() => handleClassClick(item)}>
                    <div className='font-bold text-xl mb-4'>
                        {item.name}
                    </div>
                    <div className='text-lg mb-4'>
                        {item.memberCount} members
                    </div>
                </div>
            )
        })
    }

    return (
        <>
            <div data-aos='fade-up' className='delay-100' >
                <div className='font-bold text-3xl mb-4'>
                    <FaUserFriends className='inline-block mr-2' />
                    My Classes
                </div>
            </div>
            {loading ? renderLoading() : renderClasses()}
            
        </>
    )
}

export default MyClasses