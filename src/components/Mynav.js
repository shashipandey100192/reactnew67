import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function Mynav() {

  return(
    <Fragment>
        <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="" className="nav-link px-2 text-secondary">Home</Link></li>
          <li><Link to="dashboard" className="nav-link px-2 text-white">Dashboard</Link></li>
          <li><Link to="newpage" className="nav-link px-2 text-white">forms</Link></li>
          <li><Link to="fetch1" className="nav-link px-2 text-white">fatch api</Link></li>
          <li><Link to="props" className="nav-link px-2 text-white">props</Link></li>
          <li><Link to="childrouting" className="nav-link px-2 text-white">Child Routing</Link></li>
          <li><Link to="context" className="nav-link px-2 text-white">contextapi</Link></li>
         
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
    </Fragment>
  )
}

export default Mynav