import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Welcome extends Component {

  render() {
    // const styles = require('./Welcome.scss');

    return (
      <div>
        <Helmet title="Welcome" />
        <h1>Landing page</h1>
      </div>
    );
  }
}
