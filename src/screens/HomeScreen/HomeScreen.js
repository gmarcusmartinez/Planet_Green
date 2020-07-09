import React from 'react';
import { categories } from './data';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';

const HomeScreen = () => {
  let list = categories.map((c) => (
    <CategoryPreview category={c} key={c.routeParam} />
  ));
  return <div className='home-screen'>{list}</div>;
};

export default HomeScreen;
