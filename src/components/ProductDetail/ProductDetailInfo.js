import React from 'react';
import ProductDetailActions from './ProductDetailActions';

const ProductDetailInfo = ({ name, description }) => {
  return (
    <div className='product-detail__info'>
      <div className='product-detail__title'>{name}</div>
      <div className='product-detail__description'>{description}</div>
      <ProductDetailActions />
    </div>
  );
};

export default ProductDetailInfo;
