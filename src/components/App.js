import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends Component {
  state = {
    images: []
  };

  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID 3ea301576b1e083528debe121ae9774d8d4747b92df7ffccc86a2c8f85736fca'
      },
    }).then(({ data }) => {
      this.setState({ images: data.results });
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '1rem' }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div> 
    );
  }
}

export default App;
