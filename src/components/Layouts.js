import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Layouts() {

const [mycus,myset]=useState([]);
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/2`).then((res)=>{
        console.log(res.data);
        myset(res.data);
    });

})




  return (
    <div>Layouts</div>
  )
}

export default Layouts