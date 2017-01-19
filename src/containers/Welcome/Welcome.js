import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Button from 'react-bootstrap/lib/Button';

export default class Welcome extends Component {

  render() {
    const styles = require('./Welcome.scss');

    return (
      <div className={styles.welcomeContainer}>
        <Helmet title="Welcome" />
        <h1>Don't just travel, be a Travelr</h1>
        <h3>Share your unique travel experience today!</h3>
        <Button>Join</Button>
      </div>
    );
  }
}
