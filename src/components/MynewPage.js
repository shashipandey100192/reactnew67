import React, { Fragment, useState } from 'react'
import {useForm} from 'react-hook-form';


function MynewPage() {
    const {register,handleSubmit,formState: { errors },} = useForm();
  return (
    <div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
        
            <ul>
                <li><input type="text" placeholder='firstname' {...register('firstname')}/></li>
                <li><input type="text" placeholder='lastname'{...register('lastname')} /></li>
                <li><input type="text" placeholder='email'{...register('email')} /></li>
                <li><input type="text" placeholder='password' {...register('password')} /></li>
                <li><button type='submit'>submit</button></li>
            </ul>
        </form>
        <Mynewform/>
    </div>
  )
}

export default MynewPage







export const Mynewform = ()=>{
    const [first,setfirst]=useState('ravi');
    const [last,setlast]=useState('singh');
    // const [email,setemail]=useState('email');
    // const [pass,setpass]=useState('101');
const firstname = (f)=>
{
    setfirst(f.target.value);
    // console.log(first);
}
const lastname = (f)=>
{
    setlast(f.target.value);
    // console.log(f);
}

const [myf,myfs]=useState(['name','last']);
const Mysubmits = ()=>
{
    myfs({name:first,last:last});
    console.log(myf);
}
    
    return(
        <Fragment>
            <form>
            <ul>
                <li><input type="text" placeholder='firstname' value={first} onInput={firstname}/></li>
                <li><input type="text" placeholder='lastname'value={last} onInput={lastname}/></li>
                {/* <li><input type="email" placeholder='email' value={email} /></li>
                <li><input type="password" placeholder='password' value={pass}/></li> */}
                <li><button type='button' onClick={Mysubmits}>submit</button></li>
            </ul>
            </form>
        </Fragment>
    )


}
