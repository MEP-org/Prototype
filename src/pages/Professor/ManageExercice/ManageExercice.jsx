import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ExercicesAPI } from "../../../api/ExercicesAPI"
import { ClassesAPI } from "../../../api/ClassesAPI"

import Banner from "./Banner"
import ExercicesTab from "./ExercicesTab"

export default function ManageExercice(props){

    const id = useParams().id || undefined
    const [loading, setLoading] = useState(false)
    const [classes, setClasses] = useState([])
    const [exercice, setExercice] = useState({
        id: id,
        title: undefined,
        subtitle: undefined,
        publishingDate: undefined,
        attemptsLimit: undefined,
        visible: false,
        studentClass: {id: undefined, name: undefined},
        description: undefined,
        evaluationRules: undefined,
        dataset: {training: undefined, test: undefined},
        results: []
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setExercice((prevExercice) => ({ ...prevExercice, [name]: value }));
    };

    useEffect(() => {
        setLoading(true)
        const profId = 1
        if(id) {
            ExercicesAPI.getProfExerciceById(profId, id)
            .then((data) => {
                // setExercice(data.exercice)
                setClasses(data.classes)
            })
            .finally(() => {
                setLoading(false)
            })
        }
        else {
            ClassesAPI.getByProfessor(profId)
            .then((data) => {
                setClasses(data)
            })
            .finally(() => {
                setLoading(false)
            })
        }
    }, [id])


    return (
        <>
            <div className="container">
                <Banner 
                    exercice={exercice} 
                    loading={loading} 
                />
                <ExercicesTab 
                    exercice={exercice} 
                    classes={classes} 
                    handleChange={handleChange} 
                    loading={loading} 
                />
            </div>
            
        </>
    )
}