import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSearchResults } from '../actions/index';

class SearchBar extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-error' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="control-label">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.fetchSearchResults(values.term, values.location);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="form-inline" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Search Term"
          name="term"
          component={this.renderField}
        />
        <Field
          label="Location"
          name="location"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSearchResults }, dispatch);
}

function validate(values) {
  const errors = {};

  if (!values.term) {
    errors.term = "Enter a search term";
  }

  if (!values.location) {
    errors.location = "Enter a location";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'SearchBarForm'
})(
  connect(null, mapDispatchToProps)(SearchBar)
); 
