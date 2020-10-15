import React from 'react';
import Header from '../components/header'
import Section6 from '../components/section6'
import Footer from '../components/footer'

const home = () => {

    const wellcome = ' Wellcome'
    
    return (
        <div>
            <div className="container-fluid pt-3" id="head">
                <Header  wellcome={wellcome} /> 
            </div> 
            < Section6/>
            < Footer/>
        </div>
    );
}

export default home;
