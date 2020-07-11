import React from 'react';
import { connect } from 'react-redux';
import { sortProducts } from '../../store/actions/products';

const CollectionActions = ({ sortProducts, setFilterText }) => {
  return (
    <div className='collection-actions'>
      <input
        className='collection-actions__filter'
        type='text'
        placeholder='Search...'
        onChange={(e) => setFilterText(e.target.value)}
      />
      <div className='collection-actions__sort'>
        $<span onClick={() => sortProducts('ascending')}> &#9651;</span>
        <span onClick={() => sortProducts('descending')}> &#9661;</span>
      </div>
    </div>
  );
};

export default connect(null, { sortProducts })(CollectionActions);
