import React from 'react';
import Navbar from '../components/navbar'
import Header from '../components/header'
import Footer from '../components/footer'
import Section1 from '../components/section1'
import Section2 from '../components/section2'
import Section3 from '../components/section3'


import '../pages/Style.css'

const about = () => {
    const about = 'About us'
    const services = 'Our Services: What We Do & How We Do It'
  
    const columns = [
        {
        head:'ALL BRANDS',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img:'http://drive.google.com/uc?export=view&id=1co2Ix24pUoKsybLr9rP9WEUjTVWeQE3D'
         },
        {
        head:'FREE SUPPORT',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img:'http://drive.google.com/uc?export=view&id=15rae4FMAWSvl-081igA4uQ8H38TkR0Hm'
         },
         {
        head:'DEALERSHIP',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img:'http://drive.google.com/uc?export=view&id=1LNc0E05eP-xnnMjuQ85dtewz8o6fED27'
            },
             {
        head:'AFFORDABLE',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img:'http://drive.google.com/uc?export=view&id=1TNKVQ_sAnIWoa34CRF7yiWs9tzs--YI3'
         }
]
console.log(columns.head);

    return (
        <div>
        <div className="container-fluid pt-3" id="head">
            <Navbar/>
            <Header  about={about} /> 
        </div>
         <Section1/>
         <Section2  columns={columns} prueba={services} />
         <Section3/>
        <Footer/>
        </div>
    );
}

export default about;
