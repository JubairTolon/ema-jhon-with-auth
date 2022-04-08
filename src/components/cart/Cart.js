import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props
    //step-8 calculate and set all properties of cart summary
    let total = 0;
    let shipping = 0;
    //step-9 part6
    /* 
    1.let quantity= 0;
    2.quantity = quantity + product.quantity;
    3.<p>Selected items: {"cart.length" bud diye "quantity"}</p>
    4.total = total + product.price etar por "* product.quantity" added;
    */
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
            <h2>Order summary in cart</h2>
            <p>Selected items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            {props.children}
        </div>
    );
};

export default Cart;