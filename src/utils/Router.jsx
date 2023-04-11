import {createHashRouter, RouterProvider, Navigate} from "react-router-dom";

import MyNavbar from '../components/MyNavbar'

import Home from '../pages/Home/Home';
import SignIn from '../pages/SignIn/SignIn';
import StudentHome from '../pages/Student/Home/Home.jsx'
import StudentAssignments from '../pages/Student/Assignments/Assignments.jsx'
import StudentAssignment from '../pages/Student/Assignment/Assignment.jsx'
import PublicExercise from '../pages/Student/PublicExercise/PublicExercise.jsx'
import StudentViewClass from '../pages/Student/ViewClass/ViewClass.jsx'
import PublicExercices from '../pages/PublicExercices/PublicExercices';
import ProfHome from '../pages/Professor/Classes/Classes.jsx'
import ProfManageClass from '../pages/Professor/ManageClass/ManageClass.jsx'
import ProfExercices from '../pages/Professor/Exercices/Exercices.jsx'
import ProfManageExercice from '../pages/Professor/ManageExercice/ManageExercice.jsx'
import ProfMetrics from '../pages/Professor/Metrics/Metrics.jsx'
import Error from '../pages/Error/Error.jsx'

export default function Router(){

    const router = createHashRouter(
        [
            { path: "/", element: <Home /> },
            { path: "/signin", element: <SignIn /> },
            {
                path: "/student", element: <MyNavbar type='student'/>,
                children: [
                    { index: true, element: <Navigate to="/student/home" /> },
                    { path: "home", element: <StudentHome /> },
                    { path: "publicExercices", element: <PublicExercices user='student'/> },
                    { path: "assignments", element: <StudentAssignments /> },
                    { path: "assignments/:id", element: <StudentAssignment /> },
                    { path: "publicExercises/:id", element: <PublicExercise /> },
                    { path: "viewClass", element: <StudentViewClass /> },
                ]
            },
            {
                path: "/professor", element: <MyNavbar type='professor'/>,
                children: [
                    { index: true, element: <Navigate to="/professor/classes" /> },
                    { path: "classes", element: <ProfHome /> },
                    { path: "classes/add", element: <ProfManageClass /> },
                    { path: "classes/:id", element: <ProfManageClass /> },
                    { path: "publicExercices", element: <PublicExercices user='professor'/> },
                    { path: "exercices", element: <ProfExercices /> },
                    { path: "exercices/add", element: <ProfManageExercice />},
                    { path: "exercices/:id", element: <ProfManageExercice />},
                    { path: "metrics", element: <ProfMetrics /> },
                ]
            },
            { path: "*", element: <Error /> },
        ]
    )

    return (
        <RouterProvider router={router}/>
    )
}