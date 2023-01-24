import React, { useContext } from 'react'
import { Mycontext } from './First'

function Third() {
const {name} =useContext(Mycontext);

  return (
    <div>Third {name}</div>
  )
}

export default Third