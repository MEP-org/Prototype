import React from 'react'
import {FaUserFriends} from 'react-icons/fa'
import Class from './Class';

function Classes(props){

    const {classes, loading} = props;

    const renderLoading = () => {
        return (
            <div className='card p-4 mb-4 delay-200' data-aos='fade-up' >
                Loading...
            </div>
        )
    }

    const renderClasses = () => {

        return (
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4' data-aos='fade-up'>
                {classes.map((item) => 
                    <Class key={item.id} item={item} />
                )}
            </div>
        );
    }

    return (
        <>
            <div data-aos='fade-up' className='delay-100' >
                <div className='font-bold text-3xl mb-4 delay-200'>
                    <FaUserFriends className='inline-block mr-2' />
                    Classes
                </div>
            </div>

            {loading ? renderLoading() : renderClasses()}
            
        </>
    )
}

export default Classes