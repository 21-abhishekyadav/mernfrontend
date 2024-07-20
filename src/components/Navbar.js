import React from 'react'
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();

  const handleclick=()=>{
    localStorage.removeItem('token');
    navigate("/signup");
    alert("logged out successfully")
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li> 
      </ul>

      {!localStorage.getItem('token')?
        <form class="" role="search">
        <Link class="btn btn-outline-primary mx-1" role="button" to="/login">Login</Link>
        <Link class="btn btn-outline-primary mx-1" role="button" to="/signup">Sign Up</Link></form>
        :
        <button class="btn btn-outline-primary mx-1 d-flex" onClick={handleclick} >Logout</button>

      }
      
    </div>

    
  </div>
</nav>
    </div>
  )
}

