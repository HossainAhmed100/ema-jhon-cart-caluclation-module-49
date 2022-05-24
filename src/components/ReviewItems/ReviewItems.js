import React from 'react';
import CartItem from '../CartItem/CartItem';
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewItems = (props) => {
    const carts = props.cart;
    return (
      <div>
          {
               carts.map((cartss, idx) => (<CartItem key={idx} cart={cartss}></CartItem>))
          }
      </div>
    );
};

export default ReviewItems;