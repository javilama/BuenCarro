import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import Section4 from '../components/section4'
import '../pages/Style.css'
const services = () => {
    const services = 'Our Services: What We Do & How We Do It'
    const serv = 'Services'
    return (
        <div>
           <div className="container-fluid pt-3" id="head">
            <Header  services={services} serv={serv} /> 
           </div> 
         <Section4 />
         <Footer/>
        </div>
    );
}

export default services;
