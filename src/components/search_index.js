import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../actions';

export class SearchIndex extends Component {
  render() {
    return (
      <div>Search Index</div>
    );
  }
}

export default SearchIndex; 
