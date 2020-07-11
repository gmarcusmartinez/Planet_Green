import React from 'react';
import { Link } from 'react-router-dom';

import ClearItem from './ClearItem';
import SelectQuantity from './SelectQuantity';

const CartItem = ({ cartItem }) => {
  const { _id, image, name, price } = cartItem;
  if (!cartItem) return <div>Loading...</div>;

  return (
    <div className='cart-item'>
      <div className='image-container'>
        <img src={image[0]} alt='product' />
      </div>
      <Link to={`/products/${_id}`} className='cart-item__name'>
        {name}
      </Link>
      <SelectQuantity cartItem={cartItem} />
      <span className='cart-item__price'>{price}</span>
      <ClearItem cartItem={cartItem} />
    </div>
  );
};

export default CartItem;
