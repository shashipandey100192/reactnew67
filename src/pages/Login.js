import React, { useState } from 'react';
import './mystyle.css';
import { Link } from 'react-router-dom';

function Login() {

const [user,setuser]=useState("Admin");

const abc = (e)=>{
  setuser(e.target.value);
    console.log(user);
    localStorage.setItem('username',user);
    sessionStorage.setItem('clientid',user);

}


  return (
    <div className='mylogin'>
        <div>
            <ul>
                <li><input type="text" value={user} placeholder='username' onInput={abc}/></li>
                <li><input type="password" placeholder='password'/></li>
                <li><Link to="dashboard"><button type='button'>submit</button></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Login