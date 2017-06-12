import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultList extends Component {
  renderResults(resultData) {
    const name = resultData.name;
    const url = resultData.url;

    return (
      <div className="well">
        <p>{name}</p>
        <p>{url}</p>
      </div>
    );
  }

  render() {
    return (
      <div className="container col-md-6 col-md-offset-3">
        {this.props.results.map(this.renderResults)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { results: state.searchResults };  
}

export default connect(mapStateToProps)(ResultList);
