import React from 'react';


const section2 = (props) => {

   let {columns} = props  
    


    return (
       
    <div  id="section1"  className="container pt-5 my-4">
      <div className="row  mt-4 ">
        { columns.map((app)=>{
         let {head,text,img}= app
         return(   
        <div key={head}  className="col-12 col-md-3 text-center">
          <div className="container">
            <div className="row justify-content-center ">
              <div className="col-12 ">
                <img src={img} className="img-fluid shadow-sm "alt=""/>
              </div>
            </div>
          </div>
          <div  className="container text-center pt-3 ">
            <div className="container shadow-sm">
            	<h6>{head}</h6>
            </div>
            <div className="container">
            	<p className="font-weight-light">{text}</p>
            </div>
          </div>
        </div>
         )
          
          })  }
        </div>
        </div>
    );
}

export default section2;
