import React, { useContext } from 'react'
import {Mycontext} from './First';

function Second() {
const {name,h} =useContext(Mycontext);
  return (
    <div style={{backgroundColor:'red',height:`${h}`}}>
        Second {name}

    
    </div>
  )
}

export default Second