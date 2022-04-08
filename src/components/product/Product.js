import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
//step-2 make product component
//step-4 set props, dstructure, set attrebute dynamicaly
const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = props;//etr bodole direct parameter e o boshiye deya jay props er jaygay
    const {name, img, seller, price, ratings} = product;
    
    // const {handleAddToCart, product} = props;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Rating: {ratings}</small></p>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(product)}>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;