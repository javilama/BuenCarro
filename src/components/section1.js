import React from 'react';
import carImg from '../assets/img/red_car.jpg'

const section1 = () => {
    return (
        <div className="container-fluid   justify-content-center pt-5">
			<div className="container d-flex	justify-content-center ">
				<h4>THE CARDEALER ONLINE</h4>
			</div>
			<div className="container pt-3">
				<p className="text-center" >Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Autem neque repellendus nam reiciendis modi, tempora minima, deleniti excepturi voluptatibus cum sapiente velit cupiditate omnis soluta corporis eum non obcaecati esse!</p>
			</div>
			<div className="container-fluid d-flex justify-content-center">
				<img className="img-fluid pt-5" src={carImg} alt="" id="carImg"/>
			</div>
        </div>
    );
}

export default section1;
