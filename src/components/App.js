import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    const { data } = await unsplash.get('/search/photos', {
      params: {
        query: term
      }
    });
    
    this.setState({ images: data.results });
  }

  render() {
    const { images } = this.state;
    return (
      <div className="ui container" style={{ marginTop: '1rem' }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {images.length} images
      </div> 
    );
  }
}

export default App;
