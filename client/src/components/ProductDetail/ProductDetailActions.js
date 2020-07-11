import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../store/actions/cart';
import { Link } from 'react-router-dom';

const ProductDetailActions = ({ addItem, product, currentUser }) => {
  const renderCartBtn = () =>
    currentUser ? (
      <Link className='app-theme-btn' to='/cart'>
        GO TO CART
      </Link>
    ) : null;

  return (
    <div className='product-detail__actions'>
      <div className='app-theme-btn' onClick={() => addItem(product)}>
        ADD TO CART
      </div>
      <Link className='app-theme-btn' to='/'>
        VIEW COLLECTIONS
      </Link>
      {renderCartBtn()}
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
  product: state.products.item,
});
export default connect(mapStateToProps, { addItem })(ProductDetailActions);
