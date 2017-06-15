import React from 'react';
import Loading from 'react-loading';

const LoadingComponent = ({ type, color }) => (
  <Loading type={type} color={color} height="250" width="250" id="loader" />
);

export default LoadingComponent;
