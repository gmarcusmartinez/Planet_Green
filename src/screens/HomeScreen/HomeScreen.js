import React from 'react';
import { categories } from './data';
import CollectionPreview from '../../components/CollectionPreview';

const HomeScreen = () => {
  let list = categories.map((c) => (
    <CollectionPreview category={c} key={c.routeParam} />
  ));
  return <div className='home-screen'>{list}</div>;
};

export default HomeScreen;
