import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/lib/Button';

export default class Welcome extends Component {

  render() {
    const styles = require('./Welcome.scss');
    const bgImageURL = 'http://www.acmetravel.it/newsite/wp-content/uploads/2016/05/viaggiare-in-tutto-il-mondo.jpg';
    return (
      <div
        className={styles.welcomeContainer}
        style={{'background': `url(${bgImageURL})`}}
      >
        <Helmet title="Welcome" />
        <div className={styles.welcomeMessage + ' p20 animated fadeIn'}>
          <h1>Don't just travel, Become a Travelr</h1>
          <h3>Share your unique travel experience today!</h3>
          <LinkContainer to="/signup">
            <Button
              bsStyle="primary"
              bsSize="large"
            >
              Join
            </Button>
          </LinkContainer>
        </div>
      </div>
    );
  }
}
