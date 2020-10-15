import React from 'react';
import {Link} from 'react-router-dom'


const navbar = () => {
    return (
      <div>
           <div className="navbar navbar-dark  navbar-expand-md" id="Navbar">
             <div className="container-fluid justify-content-start mx-5 px-5">
              <Link className="navbar-brand " to="/about" >
              <strong>BuenCarro</strong>
              </Link>
           </div>
         <div  id="navbarItems"  className="container-fluid justify-content-around" >        
              <Link className="navbar-brand font-weight-light" to="/">
                Home
              </Link>
              <Link  className="navbar-brand font-weight-light" to="/services">
                Services
              </Link>
              <Link className="navbar-brand font-weight-light" to="/about">
                About us
              </Link>
        </div>
    </div>
  </div>

    );
}

export default navbar;
