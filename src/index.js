import React from 'react';
import ReactDOM from 'react-dom/client';
import Mybootstrappage from './bootstrapUI/BootstrapHome';
import Materialuihome from './metrialUI/Materialuihome';
import Reactbootstraphome from './reactbootstrapUI/Reactbootstraphome';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mybootstrappage/>
    <h1>react bootstrap</h1>
    <Reactbootstraphome />
    <h1>material ui </h1>
    <Materialuihome/>
  </React.StrictMode>
);


