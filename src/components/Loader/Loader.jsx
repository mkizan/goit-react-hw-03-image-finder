import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

class LoaderReact extends Component {
  render() {
    return (
      <Loader
        type="Grid"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={5000}
        className="loader"
      />
    );
  }
}

export default LoaderReact;
