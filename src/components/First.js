import React, { createContext } from 'react'
import Second from './Second';
import Third from './Third';


export const Mycontext= createContext();
function First() {
const h='300px';
const b={name:'mohan',h:'800px'};

  return (
    <div>
        {/* <Mycontext.Provider value={{name:'ravisingh',color:'red',h:h}}> */}
        <Mycontext.Provider value={b}>
        <h1>use of create Contaxt api</h1>
        <Second/>
        <Third />


        </Mycontext.Provider>
        </div>
  )
}

export default First