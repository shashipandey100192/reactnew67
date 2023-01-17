import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { FcAddColumn,FcAlarmClock } from "react-icons/fc";
import '../coreUI/global.css';
import { Link, Outlet } from 'react-router-dom';

function Mychildelement() {
  return (
    <section className='mypage'>
        
    {/* <FaBeer/>
    <h1><FcAddColumn/></h1>
    <h1><FcAlarmClock/></h1> */}

     <div className="left d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width:'280px'}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">

      <span className="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to="product" className="nav-link active" aria-current="page">
        
          Products
        </Link>
      </li>
      <li>
        <Link to="detail" className="nav-link text-white">
         
          Details
        </Link>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
         
          Orders
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"></svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"></svg>
          Customers
        </a>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>   
  
  <div className='right'>
    <Outlet/>
  </div>


    </section>
  )
}

export default Mychildelement