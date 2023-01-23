import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../coreUI/global.css';
import { KingBed } from '@mui/icons-material';


function Layouts() {
const {id} = useParams();
const [mar,setmar]=useState([]);
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>{
        // console.log(res.data);
        setmar(res.data);
        // console.log(mar+"hi");
    });

})

const [clientvariable,clientfunction]=useState(0);

// const abc= (e)=>
// {
// const b = document.getElementById('one');
// b.style.marginLeft='200px';
// b.style.transitionDuration='1s';
// const c = e.clientX;
// console.log(e);
// console.log(c);
// clientfunction(e.clientX);

// }



const abc= (e)=>
{
const b = document.getElementById('one');
b.style.marginLeft='200px';
b.style.transitionDuration='1s';
const c = e.clientX;
console.log(e);
console.log(c);
clientfunction(e.clientX);
}


  return (
    <div className='layout'>
      <button type='button' onClick={abc}> slide</button>
      <button type='button' onClick={Mymove}>alert</button>
      <h1 className='heading' style={{marginLeft:`${clientvariable*10}px`}}>ID:{mar.id}</h1>
      <p className='custitle'>{mar.title}</p>
      <p className='para' id='one'>Text:{mar.body}</p>
      
      {mar.userId}


    </div>
  )
}

export default Layouts



export const Mymove = ()=>
{
alert("hello js");
}
