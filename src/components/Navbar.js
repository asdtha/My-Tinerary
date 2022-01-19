import React from "react";
import {Link as Linkrouter } from 'react-router-dom';


function Navbar(){
    return (
  
        <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
  <div className="container-fluid ">
  {/*   <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <Linkrouter className="nav-link active" aria-current="page" to="/">Home</Linkrouter>
      <Linkrouter className="nav-link" to="/cities">Cities</Linkrouter>
      <Linkrouter className="nav-link" to="/user">User</Linkrouter>
      <a ></a>
        
      </div>
    </div>
  </div>
</nav>
    )
}

export default Navbar;