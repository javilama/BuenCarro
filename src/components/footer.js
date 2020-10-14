import React from 'react';

const footer = () => {
    return (
        <div>
            <footer className="foot bg-dark text-center  text-white mb-5 pb-5">
      <div className="container text-left pt-3 pb-5 mb-5">
        <strong>BuenCarro</strong>
        
      </div>
      <div className="row  ">
        <div className="col col-12 col-md-6 ">
          <div className="text-left px-5 mx-5 "  >
            <h6>Contact</h6>
          </div>
          <div  className="text-left px-5 mx-5" >
           <p className="font-weight-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="col col-12 col-md-4 offset-md-2  ">
          <div className="container-fluid d-flex text-center "  >
            <h6>Suscribe to newsletter</h6>
          </div>
          <div className="container-fluid" >
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Your e-mail adress" aria-label="Search"/>
                <button className="btn btn-danger btn-md my-2 my-sm-0" type="submit">Submit
              </button>
        </form>
       </div>
        </div>
      </div>
    </footer>
        </div>
    );
}

export default footer;
