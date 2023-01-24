

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Abc, Route, Routes } from 'react-router-dom';
import  Login from './pages/Login';
import  Dashboard  from './pages/Dashboard';
import Mydatalist from './components/Mydatalist';
import MynewPage from './components/MynewPage';
import Fatchdata from './components/Fatchdata';
import Myprops from './components/Myprops';
import Mynav from './components/Mynav';
import Mychildelement from './components/Mychildelement';
import Products from './components/Products';
import  Details  from './components/Details';
import { Auth0Provider } from '@auth0/auth0-react';
import Layouts from './components/Layouts';
import First from './components/First';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-2lztdozl12hbrfpe.us.auth0.com"
    clientId="c9M95LgXZzasQkJOxVPo4Jype0v48ebl"
    redirectUri={window.location.origin}
    >
    <Abc>
      <Mynav/>
      <Routes>
        <Route path='' element={<Login/>}/>
        {/* <Route path='dashboard' element={<Dashboard/>}/> */}
        <Route path='dashboard' element={<Mydatalist/>}/>
        <Route path='dashboard/:id' element={<Layouts/>}/>
        <Route path="newpage" element={<MynewPage/>}/>
        <Route path='fetch1' element={<Fatchdata/>}/>
        <Route path='props' element={<Myprops/>}/>
        <Route path='childrouting' element={<Mychildelement/>}>
          <Route path='product' element={<Products/>}/>
          <Route path='detail' element={<Details/>}/>
        </Route>
        <Route path='context' element={<First/>}/>
        
      </Routes>
    </Abc>
    </Auth0Provider>
  </React.StrictMode>
);


