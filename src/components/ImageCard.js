import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageCard extends Component {
  static propTypes = {
    image: PropTypes.object,
  };
  
  render() {
    const { description, urls } = this.props.image;

    return (
      <div>
        <img alt={description} src={urls.regular}/>
      </div>
    );
  }
}

export default ImageCard;
