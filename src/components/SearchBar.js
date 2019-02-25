import React, { Component } from 'react';

export class SearchBar extends Component {
  state = {
    term: ''
  };

  render() {
    const { term } = this.state;

    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" value={term} onChange={({ target }) => this.setState({ term: target.value })}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
