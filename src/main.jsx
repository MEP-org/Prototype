import React from 'react';
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './assets/main.css'

import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import StudentHome from './pages/Student/Home/Home.jsx'
import StudentAssignments from './pages/Student/Assignments/Assignments.jsx'
import PublicExercices from './pages/PublicExercices/PublicExercices';
import ProfHome from './pages/Professor/Classes/Classes.jsx'
import ProfManageClass from './pages/Professor/ManageClass/ManageClass.jsx'
import ProfExercices from './pages/Professor/Exercices/Exercices.jsx'
import Error from './pages/Error/Error.jsx'


function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/signin", element: <SignIn /> },
    
    { path: "/student", element: <StudentHome /> },
    { path: "/student/home", element: <StudentHome /> },
    { path: "/student/publicExercices", element: <PublicExercices user='student'/> },
    { path: "/student/assignments", element: <StudentAssignments /> },

    { path: "/professor", element: <ProfHome /> },
    { path: "/professor/classes", element: <ProfHome /> },
    { path: "/professor/manageClass", element: <ProfManageClass /> },
    { path: "/professor/publicExercices", element: <PublicExercices user='professor'/> },
    { path: "/professor/exercices", element: <ProfExercices /> },

    { path: "*", element: <Error /> },
  ],
  {
    basename: "/Prototype"
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
