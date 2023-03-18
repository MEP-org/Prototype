import React, { useContext } from 'react';
import { MyContext } from '../../../main';
import MyNav from '../StudentNav'


function Home(){

    const { myObject, setMyObject } = useContext(MyContext);

    console.log(myObject)

    const handleClick = () => {
        setMyObject({ bar: 'bar' });
      };

    return (
        <>
            <MyNav active="home"/>
            <h1>Home</h1>
            <button onClick={handleClick}>Change Object</button>
        </>
    )
}

export default Home