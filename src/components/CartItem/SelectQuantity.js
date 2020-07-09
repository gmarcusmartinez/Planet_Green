import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem } from '../../store/actions/cart';

const SelectQuantity = ({ addItem, removeItem, cartItem }) => {
  return (
    <span className='cart-item__quantity'>
      <div className='arrow' onClick={() => removeItem(cartItem)}>
        &#10094;
      </div>
      <span className='value'>{cartItem.quantity}</span>
      <div className='arrow' onClick={() => addItem(cartItem)}>
        &#10095;
      </div>
    </span>
  );
};

export default connect(null, { addItem, removeItem })(SelectQuantity);
