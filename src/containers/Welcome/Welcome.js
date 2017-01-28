import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/lib/Button';

export default class Welcome extends Component {

  render() {
    const styles = require('./Welcome.scss');
    return (
      <div
        className={styles.welcomeContainer}
      >
        <Helmet title="Welcome" />
        <video
          src="https://s3-us-west-1.amazonaws.com/travelr-california/travelr-welcome.mp4"
          playsinline
          autoPlay
          muted
          loop
          poster="https://s3-us-west-1.amazonaws.com/travelr-california/travelr-welcome-mp4-poster.png"
        >
        </video>
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
