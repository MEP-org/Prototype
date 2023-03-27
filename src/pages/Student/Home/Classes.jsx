import {Spinner} from 'flowbite-react';
import {FaUserFriends} from 'react-icons/fa'
import ClassCard from './ClassCard';

export default function Classes(props){

    const {classes, loading} = props;

    const renderLoading = () => {
        return (
            <>
                <div data-aos='fade-up' className='w-fit mx-auto delay-400'>
                    <Spinner size='xl' />
                </div> 
            </>
        )
    }

    const renderClasses = () => {

        return (
            <div data-aos='fade-up' className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {classes.map((item) => 
                    <ClassCard key={item.id} item={item} />
                )}
            </div>
        );
    }

    return (
        <>
            <div data-aos='fade-up' className='delay-100' >
                <div className='font-semibold text-3xl mb-4 flex items-center delay-300'>
                    <FaUserFriends className='inline-block mr-2' size={23} />
                    Classes
                </div>
            </div>

            {loading ? renderLoading() : renderClasses()}
            
        </>
    )
}
