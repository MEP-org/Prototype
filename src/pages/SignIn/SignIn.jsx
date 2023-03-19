import React, { useContext } from 'react';
import { Button } from 'flowbite-react'
import { useNavigate } from "react-router-dom";
import { MyContext } from '../../main';

function SignIn(){

    const { myObject, setMyObject } = useContext(MyContext);

    const navigate = useNavigate();

    const handleProfClick = () => {
        setMyObject({
            user : { name : 'Robert Smith' , email : 'robertsmith@example.com' },
            type : 'professor',
            token: null
        })
        navigate('/professor')
    }

    const handleStudentClick = () => {
        setMyObject({
            user : { name : 'Jack Connor', email: 'jackconnor@example.com' },
            type : 'student',
            token: null
        })
        navigate('/student')
    }

    const imageUrl = `https://static.ua.pt/idp/bg/b/00${Math.floor(Math.random() * 8) + 1}-min.jpg`

    return (
        <>
            <div style={{
                height: '100vh',
                backgroundImage: `url(${imageUrl})`,
            }}>
                <div className='container mx-auto h-full flex justify-center items-center'>
                    <div className='bg-white rounded-lg shadow-xl p-8 lg:w-1/3 md:w-96'>
                        <div className='text-2xl font-bold text-center mb-6'>
                            Identity Provider UA
                        </div>
                        <Button className='w-full mb-6 bg-lime-500 hover:bg-lime-600' onClick={handleProfClick}>
                            Professor
                        </Button>
                        <Button className='w-full bg-lime-500 hover:bg-lime-600' onClick={handleStudentClick}>
                            Student
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn