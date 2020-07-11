import React from 'react';
import { Link } from 'react-router-dom';

const CollectionPreview = ({ category }) => {
  const { title, imgSrc, routeParam } = category;
  const imageStyles = { backgroundImage: `url(${imgSrc})` };
  return (
    <Link to={`/shop/${routeParam}`} className='collection-preview'>
      <div className='background-image' style={imageStyles}></div>
      <div className='collection-preview__title'>{title}</div>
    </Link>
  );
};

export default CollectionPreview;
