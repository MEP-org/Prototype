import React, { createContext, useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './assets/main.css'

import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';

import StudentHome from './pages/Student/Home/Home.jsx'

import ProfessorHome from './pages/Professor/Classes/Classes.jsx'


export const MyContext = createContext();

function App() {
  const [myObject, setMyObject] = useState({});
  useEffect(() => {
    setMyObject({ name: "John", age: 30 });
  }, []);
  return (
    <MyContext.Provider value={{ myObject, setMyObject }}>
      <RouterProvider router={router}/>
    </MyContext.Provider>
  );
}

const router = createBrowserRouter([
  { path: "/",        element: <Home /> },
  { path: "/signin",  element: <SignIn /> },
  
  { path: "/student", element: <StudentHome /> },
  { path: "/student/home", element: <StudentHome /> },

  { path: "/professor", element: <ProfessorHome /> },
  { path: "/professor/classes", element: <ProfessorHome /> },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
