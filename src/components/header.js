import React from 'react';

const header = (props) => {




    return (
        <div>
            <div className="row mx-5 px-5 pt-5 ">
        <div className="col col-12 col-lg-6" id="about">
            <div className="container  pt-5 mx-0">
                <h6>{props.serv}</h6>
               <h1>{props.about}</h1>
               <h1>{props.services}</h1>
            </div>
               <div className="container pt-5">

                <p>
            Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Eius voluptate, tenetur provident laudantium nostrum eos necessitatibus recusandae iste, cumque consectetur. Dolorem soluta aliquam perspiciatis fuga facilis esse odit consequatur eos. 
                </p>
               </div>
        </div>
     </div>
        </div>
    );
}

export default header;
