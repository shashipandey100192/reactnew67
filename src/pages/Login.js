import React from 'react';
import './mystyle.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='mylogin'>
        <div>
            <ul>
                <li><input type="text" placeholder='username'/></li>
                <li><input type="password" placeholder='password'/></li>
                <li><Link to="dashboard"><button type='button'>submit</button></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Login