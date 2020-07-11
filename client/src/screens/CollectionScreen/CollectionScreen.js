import React from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../store/actions/products';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import CollectionActions from '../../components/CollectionActions/CollectionActions';

const CollectionScreen = ({ products, getProducts, ...props }) => {
  const category = props.match.params.category;
  const [filterText, setFilterText] = React.useState('');
  React.useEffect(() => {
    getProducts(category, filterText);
  }, [getProducts, category, filterText]);

  const list = products?.map((item) => (
    <CollectionItem key={item._id} item={item} />
  ));

  if (!products) return <div>Loading...</div>;
  return (
    <div className='collection-screen'>
      <CollectionActions setFilterText={setFilterText} />
      <div className='collection-items'>{list}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.items,
});
export default connect(mapStateToProps, { getProducts })(CollectionScreen);
