import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Layout from './Layout';
import  { useState } from 'react';
import Cart from './Cart';


const Tutorial = () => {
    
    
    const CourseName = [
        {name: 'Photoshop', price : '30', instractor: 'John Doe'},
        {name: 'Illustrator', price : '40', instractor: 'Mr Mikel'},
        {name: 'Adobe premier', price : '50', instractor: 'Kelin'},
        {name: 'HTML', price : '200', instractor: 'Shely'},
        {name: 'CSS', price : '10', instractor: 'Salin'},
        {name: 'javaScript', price : '35', instractor: 'Rehman'},
        {name: 'React', price : '45', instractor: 'Rehman'},
        {name: 'Angular', price : '55', instractor: 'Jamil'},  
        {name: 'PHP', price : '65', instractor: 'Annna'},
        {name: 'java', price : '45', instractor: 'Kevin'},
        {name: 'Laravel', price : '65', instractor: 'Doglar'},
        {name: 'Python', price : '75', instractor: 'Richardo'}
    ]
    const[cart, setCart]= useState([]);
    const buttonHandelar = (enrollCourse)=>{
        console.log('cliked',enrollCourse);
        
        const newCart = [...cart, enrollCourse];
        setCart(newCart);
    }
    
    
    return (
        <div className="d-flex">
            <div className="w-50" >
                    {
                CourseName.map(course=><Layout enrollCourse={course} buttonHandelar={buttonHandelar}></Layout>)
                }
            </div>
            <div className="cart-container w-50">
                <Cart cart={cart}></Cart>
            </div>

        </div>
        
    );
};

export default Tutorial;