import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './pages/Home'
import Survey from './pages/Survey';
import Error from "./components/Error"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Results from './pages/Results';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Router>
  <Routes>
<Route path="/" element={<Home/>} />
<Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="*" element={<Error />} />
        <Route path="/results" element={<Results/>} />
  </Routes>
</Router>
   
  </React.StrictMode>
);


