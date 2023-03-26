import React from 'react'
import ProfNav from '../Professor/ProfessorNav'
import StudentNav from '../Student/StudentNav'


function PublicExercices(props){

    const MyNav = props.user === 'professor' ? ProfNav : StudentNav

    return (
        <>
            <MyNav active="publicExercices"/>
            <h1>PublicExercices</h1>
        </>
    )
}

export default PublicExercices