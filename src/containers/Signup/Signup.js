import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {initialize} from 'redux-form';
import {SignupForm} from 'components';

@connect(
  () => ({}),
  {initialize})
export default class Signup extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired
  }

  handleSubmit = (data) => {
    window.alert('Data submitted! ' + JSON.stringify(data));
    this.props.initialize('signup', {});
  }

  // handleInitialize = () => {
  //   this.props.initialize('survey', {
  //     name: 'Little Bobby Tables',
  //     email: 'bobby@gmail.com',
  //     password: 'Redux Wizard',
  //     currentlyEmployed: true,
  //     sex: 'male'
  //   });
  // }

  render() {
    return (
      <div>
        <h1 className="alignCenter">Welcome to Travelr, where traveling becomes social</h1>
        <Helmet title="Signup"/>

        {/* <div style={{textAlign: 'center', margin: 15}}>
          <button className="btn btn-primary" onClick={this.handleInitialize}>
            <i className="fa fa-pencil"/> Initialize Form
          </button>
        </div>

        <p>The circles to the left of the inputs correspond to flags provided by <code>redux-form</code>:
          Touched, Visited, Active, and Dirty.</p> */}

        <SignupForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}
