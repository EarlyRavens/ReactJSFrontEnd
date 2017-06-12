import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSearchResults } from '../actions/index';


export class SearchBar extends Component {
  render() {
    return (
      <div>Search Bar</div>
    );
  }
}

export default SearchBar;
