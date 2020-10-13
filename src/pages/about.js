import React from 'react';
import Navbar from '../components/navbar'
import Header from '../components/header'
import Footer from '../components/footer'
import Section1 from '../components/section1'
import '../pages/Style.css'

const about = () => {
    const about = 'About us'
    const services = 'Our Services: What We Do & How We Do It'
    return (
        <div>
        <div class="container-fluid pt-3" id="head">
            <Navbar/>
            <Header  about={about} /> 
        </div>
         <Section1/>
        <Footer/>
        </div>
    );
}

export default about;
