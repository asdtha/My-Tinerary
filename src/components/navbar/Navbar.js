import React from "react";
import { Link as Linkrouter } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.png"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container-fluid ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav custom-navbar-links">
          <ul class="nav justify-content-center">
          <Linkrouter className="nav-link custom-navbar-links" to="/">
            <img src={logo} class="icon-nav" alt="..." width="60" height="44"/>
            </Linkrouter>
            <Linkrouter
              className="nav-link custom-navbar-links"
              aria-current="page"
              to="/"
            >
              Home
            </Linkrouter>
            <Linkrouter className="nav-link custom-navbar-links" to="/cities">
              Cities
            </Linkrouter>
            {/*       <Linkrouter className="nav-link custom-navbar-links" to="/users">User</Linkrouter>
             */}{" "}
            <Linkrouter className="nav-link custom-navbar-links" to="/signin">
              Sign In
            </Linkrouter>
          {/*   <Linkrouter className="nav-link custom-navbar-links" to="/signin">
            <i class="large material-icons">account_circle</i>
            </Linkrouter> */}
           
   <div class="dropdown">
  <a class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <i class=" material-icons">account_circle</i>
  </a>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Linkrouter class="dropdown-item" to="/signin">Sign In </Linkrouter></li>
    <li><Linkrouter class="dropdown-item" to="/signup">Sign Up </Linkrouter></li>
  </ul>
</div>






            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
