import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <label>Image Search</label>
          <input className="field" type="text"/>
        </form>
      </div>
    );
  }
}

export default SearchBar;
