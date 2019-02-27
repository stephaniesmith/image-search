import './ImageList.css';
import React from 'react';
import PropTypes from 'prop-types';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map(image => <ImageCard key={image.id} image={image}/>)}
    </div>
  );
};

ImageList.propTypes = {
  images: PropTypes.array,
};

export default ImageList;
