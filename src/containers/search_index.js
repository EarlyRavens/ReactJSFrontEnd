import React, { Component } from 'react';
import SearchBar from '../components/search_bar'

class SearchIndex extends Component {
  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <SearchBar />
      </div>
    );
  }
}

export default SearchIndex; 
