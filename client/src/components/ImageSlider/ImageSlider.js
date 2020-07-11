import React from 'react';

const ImageSlider = ({ image }) => {
  const [selectedImage, setSelectedImage] = React.useState(0);

  const next = () => {
    selectedImage === image.length - 1
      ? setSelectedImage(0)
      : setSelectedImage(selectedImage + 1);
  };
  const previous = () => {
    selectedImage === 0
      ? setSelectedImage(image.length - 1)
      : setSelectedImage(selectedImage - 1);
  };

  const renderSelectImageControls = () =>
    image.length > 1 ? (
      <>
        <p onClick={() => previous()}>Previous</p>
        <p onClick={() => next()}>Next</p>
      </>
    ) : null;

  return (
    <div className='product-detail__image'>
      {renderSelectImageControls()}
      <img src={image[selectedImage]} alt='item' />
    </div>
  );
};

export default ImageSlider;
