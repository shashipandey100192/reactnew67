import React, { Fragment, useEffect, useState } from 'react';



function Fatchdata() {
    const [a1,b]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
                console.log(res.json());
                b(res.json());
        },[]);
    });

        


    return (
   <Fragment>
    <h1>fetch data</h1>
       {a1.map((u)=>{
            return(
                <h2>{u.id}</h2>
            )
       })}
   </Fragment>
  )
}

export default Fatchdata