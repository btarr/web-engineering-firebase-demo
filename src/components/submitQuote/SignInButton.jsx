import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default function SignInButton({
  handleSignIn
}) {
  return (
    <Button
      icon={true}
      labelPosition="left"
      color="red"
      onClick={handleSignIn}
    >
      <Icon name="google" />
      Sign in with Google
    </Button>
  );
};

SignInButton.propTypes = {
  handleSignIn: PropTypes.func.isRequired,
}