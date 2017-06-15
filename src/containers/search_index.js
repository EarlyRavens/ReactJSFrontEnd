import React, { Component } from 'react';
import SearchBar from '../components/search_bar';
import ResultList from '../components/result_list';
import NavBar from '../components/nav_bar';
import Loader from '../components/loader'

class SearchIndex extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid text-center">
          <SearchBar />
        </div>
        <div className="container col-md-12 text-center">
          <Loader type="spin" color="black" />
          <ResultList />
        </div>
      </div>
    );
  }
}

export default SearchIndex; 
