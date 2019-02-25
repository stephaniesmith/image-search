import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
  state = {
    term: ''
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);

  };

  render() {
    const { term } = this.state;

    return (
      <div className="ui segment" onSubmit={this.onFormSubmit}>
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={term}
              onChange={({ target }) => this.setState({ term: target.value })}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
