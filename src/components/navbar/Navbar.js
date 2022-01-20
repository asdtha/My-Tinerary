import React from "react";
import {Link as Linkrouter } from 'react-router-dom';
import "./navbar.css"


function Navbar(){
    return (
  
        <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
  <div className="container-fluid ">
{/* 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav custom-navbar-links">
      <Linkrouter className="nav-link custom-navbar-links" aria-current="page" to="/">Home</Linkrouter>
      <Linkrouter className="nav-link custom-navbar-links" to="/cities">Cities</Linkrouter>
{/*       <Linkrouter className="nav-link custom-navbar-links" to="/users">User</Linkrouter>
 */}      <Linkrouter className="nav-link custom-navbar-links" to="/signin">Sign In</Linkrouter>

     
        
      </div>
    </div>
  </div>
</nav>
    )
}

export default Navbar;