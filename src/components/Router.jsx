import {createHashRouter, RouterProvider, Navigate} from "react-router-dom";

import MyNavbar from './MyNavbar'

import Home from '../pages/Home/Home';
import SignIn from '../pages/SignIn/SignIn';
import StudentHome from '../pages/Student/Home/Home.jsx'
import StudentAssignments from '../pages/Student/Assignments/Assignments.jsx'
import StudentAssignment from '../pages/Student/Assignment/Assignment.jsx'
import StudentViewClass from '../pages/Student/ViewClass/ViewClass.jsx'
import PublicExercices from '../pages/PublicExercices/PublicExercices';
import ProfHome from '../pages/Professor/Classes/Classes.jsx'
import ProfManageClass from '../pages/Professor/ManageClass/ManageClass.jsx'
import ProfExercices from '../pages/Professor/Exercices/Exercices.jsx'
import Error from '../pages/Error/Error.jsx'

import Test from '../pages/Test/Test.jsx'

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
                    { path: "viewClass", element: <StudentViewClass /> },
                ]
            },
            {
                path: "/professor", element: <MyNavbar type='professor'/>,
                children: [
                    { index: true, element: <Navigate to="/professor/classes" /> },
                    { path: "classes", element: <ProfHome /> },
                    { path: "manageClass", element: <ProfManageClass /> },
                    { path: "publicExercices", element: <PublicExercices user='professor'/> },
                    { path: "exercices", element: <ProfExercices /> },
                ]
            },
            { path: "/test", element: <Test /> },
            { path: "*", element: <Error /> },
        ]
    )

    return (
        <RouterProvider router={router}/>
    )
}