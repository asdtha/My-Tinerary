import React from "react";


function Navbar(){
    return (
       /*  <div className="navbar">
            <button>Home</button>
            <button>Cities</button>
            <button>Users</button>
        </div> */
        <nav className="navbar navbar-expand-lg navbar-light bg-light city-navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Cities</a>
        <a className="nav-link" href="#">Users</a>
        
      </div>
    </div>
  </div>
</nav>
    )
}

export default Navbar;