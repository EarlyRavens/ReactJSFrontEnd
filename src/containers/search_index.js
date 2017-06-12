import React, { Component } from 'react';
import SearchBar from '../components/search_bar';
import ResultList from '../components/result_list';

class SearchIndex extends Component {
  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <SearchBar />
        <ResultList />
      </div>
    );
  }
}

export default SearchIndex; 
