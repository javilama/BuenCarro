import React from "react";
import Icon1 from '../assets/Icons/analizar.png'
import Icon2 from '../assets/Icons/branding.png'
import Icon3 from '../assets/Icons/idea-genial.png'
import Icon4 from '../assets/Icons/support.png'


const section4 = (props) => {
  return (
    <div>
      <div className="container-fluid mt-5">
        <section className="container mx-5 d-flex justify-content-center ">
          <div className="row bg-transparent">
            <div className="col col-12 col-md-3 col-lg-3 col-xl-3 d-flex align-items-center justify-content-center">
              <img
                src={Icon1}
                alt="imagen1"
                className=" img-fluid  p-4 rounded-circle"
              />
            </div>
            <div className="col-12 col-md-9 col-lg-9 col-xl-9 p-4 d-flex align-items-center ">
              <article className="container border-left " id="section4">
                <h5 className="font-weight-bold">SEO, Analitics & Marketing</h5>
                <p className="text-left font-weight-light mr-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eligendi, et quas explicabo, praesentium earum a voluptas
                  cupiditate laudantium.et quas explicabo, praesentium earum a
                  voluptas cupiditate laudantium.
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>
      <div className="container-fluid" id="servSection">
        <section className="container mx-5 d-flex justify-content-end  ">
          <div className="row bg-transparent">
            <div className="col-12 col-md-8 col-lg-8 col-xl-8 p-4 d-flex align-items-center">
              <article className="container border-right text-right" id="section4">
                <h5 className="font-weight-bold">Digital Branding & Marketing</h5>
                <p className="text-right font-weight-light ml-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eligendi, et quas explicabo, praesentium earum a voluptas
                  cupiditate laudantium.et quas explicabo, praesentium earum a
                  voluptas cupiditate laudantium.
                </p>
              </article>
            </div>
            <div className="col col-12 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center justify-content-center ">
              <img
                src={Icon2}
                alt="imagen1"
                className=" img-fluid  p-4 rounded-circle"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="container-fluid ">
        <section className="container mx-5 d-flex justify-content-center ">
          <div className="row bg-transparent">
            <div className="col col-12 col-md-3 col-lg-3 col-xl-3 d-flex align-items-center justify-content-center">
              <img
                src={Icon3}
                alt="imagen1"
                className=" img-fluid  p-4 rounded-circle"
              />
            </div>
            <div className="col-12 col-md-9 col-lg-9 col-xl-9 p-4 d-flex align-items-center ">
              <article className="container border-left " id="section4">
                <h5 className="font-weight-bold">Creative Thinking & Design</h5>
                <p className="text-left font-weight-light mr-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eligendi, et quas explicabo, praesentium earum a voluptas
                  cupiditate laudantium.et quas explicabo, praesentium earum a
                  voluptas cupiditate laudantium.
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>
      <div className="container-fluid mb-5 pb-5" id="servSection">
        <section className="container mx-5 d-flex justify-content-end  ">
          <div className="row bg-transparent">
            <div className="col-12 col-md-8 col-lg-8 col-xl-8 p-4 d-flex align-items-center">
              <article className="container border-right text-right" id="section4">
                <h5 className="font-weight-bold">Premium 24/7 Support</h5>
                <p className="text-right font-weight-light ml-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eligendi, et quas explicabo, praesentium earum a voluptas
                  cupiditate laudantium.et quas explicabo, praesentium earum a
                  voluptas cupiditate laudantium.
                </p>
              </article>
            </div>
            <div className="col col-12 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center justify-content-center ">
              <img
                src={Icon4}
                alt="imagen1"
                className=" img-fluid  p-4 rounded-circle"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default section4;
