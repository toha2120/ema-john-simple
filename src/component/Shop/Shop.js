import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const  [products, setproducts] = useState([]);
    const [cart, setcart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setproducts(data));
    }, [])

    const handleAddToCart = (product) =>{
        console.log(product);
        const newCart = [...cart, product];
        setcart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product 
                    key={product.id}
                    product={product}
                    handleAddToCart ={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;