import React from 'react'
import Mysubchild from './Mysubchild'

function Mycontact(props) {
  return (
    <div className='mybox'>
        <h1>Mycontact {props.age}</h1>
        <h3>{props.text1}</h3>
        <div>{props.myconp}</div>
        <Mysubchild type="this is text" ducat={props.myconp}></Mysubchild>
    </div>
  )
}

export default Mycontact