import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { signInWithPopup, signOut } from '../../utilities/googleOauthUtils';
import SignOutButton from './SignOutButton';
import SignInButton from './SignInButton';
import { Popup } from 'semantic-ui-react';

export default class OauthButton extends PureComponent {

  constructor(props) {
    super(props);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleOauthError = this.handleOauthError.bind(this);
    this.state = {
      error: false,
    }
  }

  handleSignIn() {
    signInWithPopup(this.props.oauthProvider).then(() => {
      this.setState({
        error: false,
      });
    }).catch(this.handleOauthError);
  }

  handleSignOut() {
    signOut(this.props.oauthProvider).then(() => {
      this.setState({
        error: false,
      });
    }).catch(this.handleOauthError);
  }

  handleOauthError() {
    this.setState({
      error: true,
    });
  }

  renderSignOutButton() {
    return (
      <SignOutButton
        handleSignOut={this.handleSignOut}
      />
    )
  }

  renderSignInButton() {
    return (
      <SignInButton
        handleSignIn={this.handleSignIn}
      />
    )
  }

  render() {
    const signedIn = !!this.props.currentUser;
    return (
      <Popup
        trigger={signedIn ? this.renderSignOutButton() : this.renderSignInButton()}
        content={`Sign ${signedIn? 'Out' : 'In'} failed`}
        open={this.state.error}
        position="bottom left"
      />
    )
  }
}

OauthButton.propTypes = {
  oauthProvider: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
}