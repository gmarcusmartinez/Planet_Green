import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../store/actions/cart';

const ClearItem = ({ clearItemFromCart, cartItem }) => {
  return (
    <div
      className='cart-item__remove-button'
      onClick={() => clearItemFromCart(cartItem)}
    >
      &#10005;
    </div>
  );
};

export default connect(null, { clearItemFromCart })(ClearItem);
