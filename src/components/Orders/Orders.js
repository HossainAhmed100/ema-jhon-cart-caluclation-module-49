import React from 'react';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import ReviewItems from '../ReviewItems/ReviewItems';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
                <div className='container margin-top'>
                <div className='row'>
        
                <div className="col com-md-8">
                    <ReviewItems cart={cart}></ReviewItems>
                    </div>
               
                    <div className="col col-md-4 cart">
                    <Cart cart={cart}></Cart>
                    </div>
                    </div>
         
                </div>
    );
};

export default Orders;