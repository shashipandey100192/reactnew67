

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Abc, Route, Routes } from 'react-router-dom';
import  Login from './pages/Login';
import  Dashboard  from './pages/Dashboard';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Abc>
      <Routes>
        <Route path='' element={<Login/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
      </Routes>
    </Abc>
  </React.StrictMode>
);


