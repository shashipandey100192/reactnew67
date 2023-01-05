import React, { useState } from 'react'
import { Mychild } from './Childcomponent';
import Mynav from './Mynav'

function Dashboard() {
  
  const a=20;

const [statevariable,statefunction]=useState('kumar');


const myfunction = ()=>{
  statefunction('ducat india');
}

const [intv,intf] = useState(0);
const [c,b]=useState(0);
    if(c>=8)
    {
      alert("this is greater then");
    }

const myinput = (u)=>{
  intf(u.target.value);
  console.log(u);
  console.log(u.nativeEvent.data);
  b(u.nativeEvent.data);
}


  return (
    <div>
        <Mynav />
        <h1>Welcome to Dashboard</h1>


    <h1>{a}</h1>
    <h1 onClick={myfunction}>{statevariable}</h1>
    <input type="text" value={intv} onInput={myinput} />
    <p>{intv}</p>
    <h1>{c}</h1>
    <Mychild/>
        </div>
  )
}

export default Dashboard