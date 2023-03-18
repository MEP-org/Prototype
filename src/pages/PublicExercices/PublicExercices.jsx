import React from 'react'
import ProfNav from '../Professor/ProfessorNav'
import StudentNav from '../Student/StudentNav'

function PublicExercices(props){

    const { user } = props

    return (
        <>
            {user === 'professor' ? <ProfNav active='public-exercices'/> : <StudentNav active='public-exercices'/>}
            <h1>PublicExercices</h1>
        </>
    )
}

export default PublicExercices