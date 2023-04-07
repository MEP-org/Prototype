import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import AssignmentTab from "./AssignmentTab";
import { ExercicesAPI } from "../../../api/ExercicesAPI";
import Banner from "./Banner";


export default function Assignment(){

    const { assignmentId } = useParams();
    const [loading, setLoading] = useState(false);
    const [assignment, setAssignment] = useState({
        id: assignmentId,
        title: undefined,
        subtitle: undefined,
        publishingDate: undefined,
        deliveryDeadline: undefined,
        visible: undefined,
        attemptsLimit: undefined,
        totalSubmissions: undefined,
        studentClass: {
            id: undefined,
            name: undefined
        },
        description: undefined,
        evaluationRules: undefined,
        dataset: {
            train: {
                fileName: undefined,
                size: undefined,
                url: undefined,
                uploadDate: undefined
            },
            test: {
                fileName: undefined,
                size: undefined,
                url: undefined,
                uploadDate: undefined
            }
        },
        submissions: {
            results: {
                file: {
                    name: undefined,
                    size: undefined,
                    url: undefined
                },
                uploadDate: undefined
            },
            model: {
                file: {
                    name: undefined,
                    size: undefined,
                    url: undefined
                },
                uploadDate: undefined
            }
        },
        results: {
            student: [],
            class: []
        }
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAssignment((prevAssignment) => ({ ...prevAssignment, [name]: value }));
    };

    useEffect(() => {
        setLoading(true);
        const studentID = 100001;
        ExercicesAPI.getAssignmentById(studentID)
        .then((data) => {
            setAssignment(data);
        })
        .finally(() => {
            setLoading(false);
        })
    }, []);

    return (
        <>
            <div className='w-full container mt-8'>
                <Banner assignment={assignment} loading={loading} />
                <AssignmentTab assignment={assignment} handleChange={handleChange} loading={loading} />
            </div>
        </>
    )
}
