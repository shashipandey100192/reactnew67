import React, { useEffect, useState } from 'react'

export const Mychild =()=>{

const [a,b]=useState(0);
const [x,y]=useState();
useEffect( ()=>{
    console.log("hello");
    b(localStorage.getItem('username'));
    y(sessionStorage.getItem('clientid'));
})


    return(
        <>
        <h1>welcome to child compoent</h1>
        <h2> UserName is:{a}</h2>
        <h2>ClientId: {x}</h2>
        </>
    )

}