import React, { Fragment } from 'react'
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

    
    return(
        <Fragment>
            <form>
            <ul>
                <li><input type="text" placeholder='firstname' value={a}/></li>
                <li><input type="text" placeholder='lastname'value={b} /></li>
                <li><input type="text" placeholder='email' value={c}/></li>
                <li><input type="text" placeholder='password' value={d}/></li>
                <li><button type='button'>submit</button></li>
            </ul>

            </form>


        </Fragment>


    )


}
