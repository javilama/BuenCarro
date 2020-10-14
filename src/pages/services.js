import React from 'react';
import Navbar from '../components/navbar'
import Header from '../components/header'
const services = () => {
    return (
        <div>
           <div className="container-fluid pt-3" id="head">
            <Navbar/>
            <Header  about={about} /> 
        </div> 
        </div>
    );
}

export default services;
