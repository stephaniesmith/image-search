import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: '1rem' }}>
      <SearchBar/>
    </div> 
  );
};

App.propTypes = {

};

export default App;
