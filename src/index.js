

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Abc, Route, Routes } from 'react-router-dom';
import  Login from './pages/Login';
import  Dashboard  from './pages/Dashboard';
import Mydatalist from './components/Mydatalist';
import MynewPage from './components/MynewPage';
import Fatchdata from './components/Fatchdata';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Abc>
      <Routes>
        <Route path='' element={<Login/>}/>
        {/* <Route path='dashboard' element={<Dashboard/>}/> */}
        <Route path='dashboard' element={<Mydatalist/>}/>
        <Route path="newpage" element={<MynewPage/>}/>
        <Route path='fetch1' element={<Fatchdata/>}/>
      </Routes>
    </Abc>
  </React.StrictMode>
);


