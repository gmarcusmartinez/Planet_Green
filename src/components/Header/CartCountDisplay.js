import React from 'react';
import { connect } from 'react-redux';

const CartCountDisplay = ({ cartItems }) => {
  const count = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  return <>{count}</>;
};
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});
export default connect(mapStateToProps, {})(CartCountDisplay);
