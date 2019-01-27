import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default function SignOutButton({
  handleSignOut,
}) {
  return (
    <Button
      color="red"
      onClick={handleSignOut}
    >
      Sign out
    </Button>
  )
}

SignOutButton.propTypes = {
  handleSignOut: PropTypes.func.isRequired,
}