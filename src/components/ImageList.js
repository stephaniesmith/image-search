import React from 'react';
import PropTypes from 'prop-types';

const ImageList = ({ images }) => {
  return (
    <div>
      {images.map(({ id, urls }) => <img key={id} src={urls.small}/>)}
    </div>
  );
};

ImageList.propTypes = {
  images: PropTypes.array,
};

export default ImageList;
