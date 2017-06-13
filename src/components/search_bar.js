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
      <form className="form-group" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Search Term"
          name="term"
          component={this.renderField}
        />
        <Field
          label="Location (Zip Code)"
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
    errors.term = 'Enter a search term';
  }

  const postalCodeRegex = /^\d{5}$/;

  if (!values.location || !postalCodeRegex.test(values.location)) {
    errors.location = 'Enter a valid 5 digit zip code';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'SearchBarForm'
})(
  connect(null, mapDispatchToProps)(SearchBar)
); 
