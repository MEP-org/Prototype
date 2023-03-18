import React from 'react'
import  HomeNav from './HomeNav.jsx'
import Banner from './Banner.jsx'


function Home(){


    return (
        <>
            <HomeNav />

            <div className='container mx-auto mt-8'>
                <Banner />
            </div>
        </>
    )
}

export default Home
  