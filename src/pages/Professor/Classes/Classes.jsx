import React, { useContext } from 'react';
import { MyContext } from '../../../main';
import MyNav from '../ProfessorNav'


function Classes(){

    const { myObject, setMyObject } = useContext(MyContext);

    console.log(myObject)

    const handleClick = () => {
        setMyObject({ foo: 'foo' });
      };

    return (
        <>
            <MyNav active='classes'/>
            <div className='container mx-auto mt-8'>
                <h1>Classes</h1>
                <button onClick={handleClick}>Change Object</button>
            </div>
        </>
    )
}

export default Classes