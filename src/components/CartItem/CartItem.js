import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    const {name, price, shipping, quantity, img} = props.cart;
    return (
        <div className="review-item">
            <div>
            <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className="product-name">{name}</p>
                    <p>Price: <span className="orange-color">{price}</span></p>
                    <p>Shipping: <span className="orange-color">{shipping}</span></p>
                    <p>Quantity: <span className="orange-color">{quantity}</span></p>
                </div>
                <div>
                <button className='deleteBTn'><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;