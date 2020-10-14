import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faComment, faMugHot, faTrophy } from '@fortawesome/free-solid-svg-icons'


const section3 = () => {
    return (
        <div>
            <div  className="container-fluid text-center" >
    	<div  className="row mx-5 my-5 align-items-center" id="section3">
    		<div className="col col-12 col-md-3">
    			<div className="container">
    			<h6>VEHICLES IN STOCK</h6>
    			</div>
    			<div className="row  ">
    				<div className="col col-12 col-md-4 d-flex justify-content-start offset-4">
                    <FontAwesomeIcon  icon={faCar} size="2x" inverse pull="left"/>
    					<h4>471</h4>
    				</div>
    			</div>
    		</div>
    		<div class="col col-12 col-md-3">	<div className="container">
    			<h6>DEALER REVIEWS</h6>
    			</div>
    			<div className="row  ">
    				<div className="col col-12 col-md-6 d-flex justify-content-start offset-4">
                    <FontAwesomeIcon  icon={faComment} size="2x" inverse pull="left"/>
    					<h4>719</h4>
    				</div>
    			</div>
            </div>
    		<div className="col col-12 col-md-3">	<div class="container">
    			<h6>HAPPY CUSTOMER</h6>
    			</div>
    			<div className="row  ">	
                <div className="col col-12 col-md-6 d-flex justify-content-start offset-4">
                <FontAwesomeIcon  icon={faMugHot} size="2x" inverse pull="left"/>
    					<h4>719</h4>
    				</div>
    			</div>
                </div>
    		<div className="col col-12 col-md-3">	<div class="container">
    			<h6>AWARDS</h6>
    			</div>
    			<div className="row  ">	
                <div className="col col-12 col-md-6 d-flex justify-content-start offset-4">
                <FontAwesomeIcon  icon={faTrophy} size="2x" inverse pull="left"/>
    					<h4>719</h4>
    				</div>
    			</div>
           </div>
    	</div>
    </div>
        </div>
    );
}

export default section3;
