import './ImageList.css';
import React from 'react';
import PropTypes from 'prop-types';

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map(({ id, urls, description }) => <img key={id} src={urls.small} alt={description}/>)}
    </div>
  );
};

ImageList.propTypes = {
  images: PropTypes.array,
};

export default ImageList;
