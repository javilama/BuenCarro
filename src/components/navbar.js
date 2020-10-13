import React from 'react';

const navbar = () => {
    return (
      <div>
           <div class="navbar navbar-dark navbar-expand-md">
        <div class="container-fluid justify-content-start mx-5 px-5">
            <a href="#" class="navbar-brand ">
             <strong>BuenCarro</strong>
            </a>
        </div>
        <div  id="navbarItems"  class="container-fluid justify-content-around" >        
            <a  href="#" class="navbar-brand font-weight-light">
              Home
            </a>
            <a href="#" class="navbar-brand font-weight-light">
              Services
            </a>
            <a href="#" class="navbar-brand font-weight-light">
              About us
            </a>
        </div>
    </div>

      </div>

    );
}

export default navbar;
