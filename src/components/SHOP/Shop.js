import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import PRODUCT from '../PRODUCT/Product';
import './Shop.css';


const Shop = () => {
    const first10 = fakeData.slice (0,10);
    const [products] = useState(first10);
    const [cart , setCart] = useState([])

    const handleAddProduct = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
            
            {
                products.map ( pd => <PRODUCT
                    handleAddProduct = {handleAddProduct}
                    product={pd}
                        ></PRODUCT>)
            }
        
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;