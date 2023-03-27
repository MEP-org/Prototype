import React from 'react';
import ReactDOM from "react-dom/client";
import { Flowbite } from 'flowbite-react';

import './styles/main.css'
import Router from './components/Router'

function App() {

  return (
    <>
      <Flowbite> 
        <Router />
      </Flowbite>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
