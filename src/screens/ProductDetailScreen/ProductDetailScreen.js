import React from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../../store/actions/products';
import ProductDetailInfo from '../../components/ProductDetail/ProductDetailInfo';
import ImageSlider from '../../components/ImageSlider/ImageSlider';

const ProductDetailScreen = ({ getProduct, match, product }) => {
  const productId = match.params.id;

  React.useEffect(() => {
    getProduct(productId);
  }, [getProduct, productId]);

  if (!product) return <div>Loading...</div>;
  const { image, name, description } = product;

  return (
    <div className='product-detail'>
      <ImageSlider image={image} />
      <ProductDetailInfo name={name} description={description} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.products.item,
});
export default connect(mapStateToProps, { getProduct })(ProductDetailScreen);
