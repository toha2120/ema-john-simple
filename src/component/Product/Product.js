import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const { name, price, img, ratings, seller } = props.product;
    console.log(props);
    
    return (
        <div className='product'>
            <div className='product-info'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>price: {price}</p>
                <p>Rating: {ratings}</p>
                <p>seller: {seller}</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;