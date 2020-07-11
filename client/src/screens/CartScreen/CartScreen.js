import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { calculateTotal } from '../../utils';
import CartItem from '../../components/CartItem/CartItem';

const CartScreen = ({ cartItems }) => {
  const renderCartItems = () =>
    cartItems?.map((c) => <CartItem key={c._id} cartItem={c} />);

  const headerBlocks = ['', 'Product', 'Quantity', 'Price', ''];
  const headers = headerBlocks.map((hb, i) => (
    <div className='header' key={i}>
      {hb}
    </div>
  ));

  const renderCheckoutBtn = () =>
    cartItems.length ? (
      <Link to='/checkout' className='app-theme-btn' style={{ width: '100%' }}>
        GO TO CHECKOUT
      </Link>
    ) : null;

  return (
    <div className='cart-screen'>
      <div className='cart-screen__headers'>{headers}</div>
      {renderCartItems()}
      <div className='cart-screen__total'>
        <span>TOTAL: ${calculateTotal(cartItems)}</span>
      </div>
      {renderCheckoutBtn()}
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});
export default connect(mapStateToProps, {})(CartScreen);
