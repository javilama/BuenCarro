import React from 'react';
import Img from '../assets/img/red_car.jpg'

const section6 = () => {
    return (
        <div>
              <section className="container m-3 ">
                <div className="row">
                  <div className="col-12 col-md-6 ">
                    <img
                      src={Img}
                      alt="imagen1"
                      className=" img-fluid m-4 p-4 rounded-circle "
                    />
                  </div>
                  <div className="col-12 col-md-6 p-4 d-flex align-items-center ">
                    <article className="container border-left ">
                      <h1>Begin!! <small>Provident eum exercitationem.</small></h1>
                      <p className="text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Eligendi, et quas explicabo, praesentium earum a voluptas
                        cupiditate 
                      </p>
                    </article>
                  </div>
                </div>
              </section>
        </div>
    );
}

export default section6;
