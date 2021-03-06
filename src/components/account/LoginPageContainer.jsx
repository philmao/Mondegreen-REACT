import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logUserIn } from '../../actions/authentication';

import LoginPage from './LoginPage';

export class LoginPageContainer extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    // bound functions
    this.logUserInFunction = this.logUserInFunction.bind(this);
  }

  logUserInFunction(userData) {
    const { dispatch } = this.props;
    dispatch(logUserIn(userData));
  }

  render() {
    const { authentication } = this.props;
    console.log(this.props);

    if (authentication.isLoggedIn) {
      return (
        // <Redirect to="/" />
        <Redirect to={`/account/profile/${this.props.authentication.username}`} />
      );
    }

    return (
      <div>
        <LoginPage loginFunction={this.logUserInFunction} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
  };
}

export default connect(mapStateToProps)(LoginPageContainer);
