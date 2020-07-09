import React from 'react';
import { Link } from 'react-router-dom';

const CategoryPreview = ({ category }) => {
  const { title, imgSrc, routeParam } = category;
  const imageStyles = { backgroundImage: `url(${imgSrc})` };
  return (
    <Link to={`/shop/${routeParam}`} className='category-preview'>
      <div className='background-image' style={imageStyles}></div>
      <div className='category-preview__title'>{title}</div>
    </Link>
  );
};

export default CategoryPreview;
