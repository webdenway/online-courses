import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const enroll = cart[i];
        let x= Number(enroll.price);
        total = total + x;
      
        
    }
   
    let x= Number(total);
    return (
        <div className="card">
            <h3>Order Details</h3>
            <h4>Course Purchased : {cart.length} </h4>
            <h4>Total Price : {x}</h4>

            
        </div>
    );
};

export default Cart;