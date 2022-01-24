import React from "react";
import { Link as Linkrouter } from "react-router-dom";
import logo from "../../assets/logo.jpg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-container-navbar">
      <div className="container-fluid">
        <a className="navbar-brand">
          <Linkrouter className=" " to="/">
            <img
              src={logo}
              className="nav-icon"
              alt="..."
              width="60"
              height="44"
            />
          </Linkrouter>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* HOME */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
                <Linkrouter className="nav-link custom-navbar-links" to="/">
                  Home
                </Linkrouter>
              </a>
            </li>

            {/* CITIES */}
            <li className="nav-item">
              <a className="nav-link">
                <Linkrouter
                  className="nav-link custom-navbar-links"
                  to="/cities"
                >
                  Cities
                </Linkrouter>
              </a>
            </li>
          </ul>

          <div className="dropdown div-dropdown  ">
            <a
              className="btn navbar-text"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className=" material-icons user-icon">account_circle</i>
            </a>
            <ul
              className="dropdown-menu ul-dropdown "
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                {" "}
                <Linkrouter className="dropdown-item signin" to="/signin">
                  Sign In{" "}
                </Linkrouter>
              </li>
              <li>
                {" "}
                <Linkrouter className="dropdown-item signup" to="/signup">
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
