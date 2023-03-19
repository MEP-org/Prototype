import React, { createContext, useState } from 'react';
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, useLocation} from "react-router-dom";
import './assets/main.css'

import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import StudentHome from './pages/Student/Home/Home.jsx'
import StudentAssignments from './pages/Student/Assignments/Assignments.jsx'
import PublicExercices from './pages/PublicExercices/PublicExercices';
import ProfessorHome from './pages/Professor/Classes/Classes.jsx'
import ProfessorExercices from './pages/Professor/Exercices/Exercices.jsx'
import Error from './pages/Error/Error.jsx'


export const MyContext = createContext();

function App() {
  const myObj = { 
    user : { name : "null" , email : null },
    type : null,
    token : null 
  }
  const [myObject, setMyObject] = useState(myObj);
  return (
    <>
      <MyContext.Provider value={{ myObject, setMyObject }}>
        <RouterProvider router={router}/>
      </MyContext.Provider>
    </>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/signin", element: <SignIn /> },
  
  { path: "/student", element: <StudentHome /> },
  { path: "/student/home", element: <StudentHome /> },
  { path: "/student/public-exercices", element: <PublicExercices user='student'/> },
  { path: "/student/assignments", element: <StudentAssignments /> },

  { path: "/professor", element: <ProfessorHome /> },
  { path: "/professor/classes", element: <ProfessorHome /> },
  { path: "/professor/public-exercices", element: <PublicExercices user='professor'/> },
  { path: "/professor/exercices", element: <ProfessorExercices /> },

  { path: "*", element: <Error /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
