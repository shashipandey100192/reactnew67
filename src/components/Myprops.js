import React, { Fragment } from 'react'
import Mycontact from './Mycontact'
import '../coreUI/global.css';

function Myprops() {
    const myvar = 50;
    const x = "The World Wide Web, commonly known as the Web, is an information system enabling documents and other web resources to be accessed over the Internet. Documents and downloadable media are made"
    const y =<Myfunction/>
    return (
    <Fragment>
        <div className='mybox'>
    <h1>Myprops</h1>
    {x}
    <p> this is paragraph</p>
    <Mycontact age={myvar} text1={x} myconp={y}></Mycontact>
    </div>
    </Fragment>
  )
}

export default Myprops




export const Myfunction = ()=>
{
    return(
        <>  
        <p className='xyz'>welcome to react propes</p>
        </>
    )

}
