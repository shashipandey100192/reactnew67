import React, { Fragment, useEffect, useState } from 'react';



function Fatchdata() {
  
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
                console.log(res.json());
                
        },[]);
    });

        


    return (
   <Fragment>
    <h1>fetch data</h1>
      
   </Fragment>
  )
}

export default Fatchdata