import React from 'react'
import { Button } from 'flowbite-react'
import { Link } from "react-router-dom";

function SignIn(){

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
                        <Link to='/professor'>
                            <Button className='w-full mb-6 bg-lime-500 hover:bg-lime-600'>
                                Professor
                            </Button>
                        </Link>
                        <Link to='/student'>
                        <Button className='w-full bg-lime-500 hover:bg-lime-600'>
                            Student
                        </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn