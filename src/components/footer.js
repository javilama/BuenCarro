import React from 'react';
import {  } from '@fortawesome/free-solid-svg-icons'

const footer = () => {
    return (
        <div>
    <footer className="foot bg-dark text-center  text-white mb-5 pb-5">
      <div className="container-fluid pt-5">
         <div className="container text-left pt-3 pb-5 mb-5">
        <strong className="font-italic ">BuenCarro</strong>
      </div>
      <div className="row  ">
        <div className="col col-12 col-md-6 col-lg-6 col-xl-6 ">
          <div className="text-left px-5 mx-5 "  >
            <h6>Contact</h6>
          </div>
          <div  className="text-left px-5 mx-5" >
           <p className="font-weight-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
          <div className="container-fluid d-flex justify-content-end text-center mr-5 pr-5"  >
            <h6>Suscribe to newsletter</h6>
          </div>
          <div className="container-fluid  d-flex justify-content-end mr-5 pr-5" >
            <form className="form-inline my-2 my-lg-0">
              <div className="input-group">
                <input type="e-mail" className="form-control" placeholder="E-mail" aria-describedby="button-addon4"/>
              <div className="input-group-append" id="button-addon4">
                <button className="btn btn-danger" type="button">Submit</button>
              </div>
             </div>
        </form>
       </div>
        </div>
      </div> 
      </div>
    </footer>
        </div>
    );
}

export default footer;
