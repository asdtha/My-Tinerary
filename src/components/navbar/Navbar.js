import React from "react";
import { Link as Linkrouter } from "react-router-dom";
import logo from "../../assets/logo.jpg";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light custom-container-navbar">
      <div class="container-fluid">
        <a class="navbar-brand">
          <Linkrouter className="nav-link " to="/">
            <img
              src={logo}
              class="  nav-icon"
              alt="..."
              width="60"
              height="44"
            />
          </Linkrouter>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {/* HOME */}
            <li class="nav-item">
              <a class="nav-link active" aria-current="page">
                <Linkrouter className="nav-link custom-navbar-links" to="/">
                  Home
                </Linkrouter>
              </a>
            </li>

            {/* CITIES */}
            <li class="nav-item">
              <a class="nav-link">
                <Linkrouter
                  className="nav-link custom-navbar-links"
                  to="/cities"
                >
                  Cities
                </Linkrouter>
              </a>
            </li>
          </ul>
         
            <div class="dropdown div-dropdown">
              <a
                class="btn navbar-text"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class=" material-icons user-icon">account_circle</i>
              </a>
              <ul
                className="dropdown-menu ul-dropdown"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  {" "}
                  <Linkrouter class="dropdown-item signin" to="/signin">
                    Sign In{" "}
                  </Linkrouter>
                </li>
                <li>
                  {" "}
                  <Linkrouter class="dropdown-item signup" to="/signup">
                    Sign Up{" "}
                  </Linkrouter>
                </li>
              </ul>
              
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
