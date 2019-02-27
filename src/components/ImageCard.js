import React, { Component } from 'react'

export class ImageCard extends Component {
  
  render() {
    const { description, urls } = this.props.images;

    return (
      <div>
        <img alt={description} src={urls.regular}/>
      </div>
    );
  }
}

export default ImageCard;
