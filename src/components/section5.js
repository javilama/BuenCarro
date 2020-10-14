import React from 'react';
import Bill from '../assets/img/Bill.jpg'

const section5 = () => {
    return (
        <div>
           <div className="container">
      <section className="container">
          <div className="container d-flex  justify-content-center">
              <h4>OUR TESTIMONIAL</h4>
            </div>
         <div  className="row py-5 mx-5 ">
            <div id="Testimonial" class="col col-12 col-md-4 col-lg-4 col-xl-4 ">
              <div className="container d-flex justify-content-end">
                <img src={Bill}alt=""/>
              </div>
            </div>
          <div className="col col-12 col-md-8 col-lg-8 col-xl-8 ">
             <div className="container font-weight-light border-left "  >
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident natus facilis sint itaque minus numquam nemo nobis excepturi! Eligendi, in architecto labore ducimus facilis commodi, voluptate aliquam mollitia porro vitae!</p>
              </div>
              <div className="container pt-3">
                <h4>Bill Gates</h4>
              </div>
              <div className="container">
                <h6>Microsoft CEO</h6>
              </div>
            </div>
          </div>
      </section>
        </div>
        </div>
    );
}

export default section5;
