import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { registerUser } from '../../actions/authentication';

import RegisterPage from './RegisterPage';

export class RegisterPageContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log('anything');

    // bound functions
    this.registerUserFunction = this.registerUserFunction.bind(this);
  }

  registerUserFunction(userData) {
    const { dispatch } = this.props;
    dispatch(registerUser(userData));
  }

  render() {
    const { authentication } = this.props;

    if (authentication.isLoggedIn) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <div>
        <RegisterPage registerFunction={this.registerUserFunction} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
  };
}

export default connect(mapStateToProps)(RegisterPageContainer);
