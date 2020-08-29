import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Layout = (props) => {
 console.log(props)

    const {name, price, instractor} = props.enrollCourse;

    return (
           
                                                
                  <div className={"card  m-1"}>
                    <div className={"card-body"}>
                    <h5 className={"card-title"}>Course Name: {name}</h5>
                    <h6 className={"card-subtitle mb-2 text-muted"}>Price : ${price}</h6>
                    <p className={"card-text"}>Instructor : {instractor}</p>
                    <button className={"btn btn-success"} onClick={()=>props.buttonHandelar(props.enrollCourse)}>Enroll this course</button>
                    
                    </div>
                </div>
                     

                      



           
            

    
        
    );
};

export default Layout;