import React from 'react';
import { Link } from 'react-router-dom';

const CollectionItem = ({ item }) => {
  const { _id, image, name, price } = item;
  return (
    <Link className='collection-item' to={`/products/${_id}`}>
      <img src={image[0]} alt='' />
      <div className='collection-item__name'>{name}</div>
      <div className='collection-item__price'>{price}</div>
      <div className='collection-item__link'>View Product</div>
    </Link>
  );
};

export default CollectionItem;
