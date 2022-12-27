import React from 'react';
import ReactDOM from 'react-dom/client';
import Myclass from './components/About';
import Home from './components/Myhome';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Home />
   <Myclass />
  </React.StrictMode>
);


