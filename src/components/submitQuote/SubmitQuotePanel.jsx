import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import OauthButton from './OauthButton';
import { getCurrentUser } from '../../utilities/googleOauthUtils';

export default class SubmitQuotePanel extends PureComponent {
  constructor() {
    super();
    this.handleChangeCurrentUser = this.handleChangeCurrentUser.bind(this);
    this.state = {
      currentUser: getCurrentUser(),
    }
  }

  handleChangeCurrentUser(currentUser) {
    this.setState({
      currentUser,
    });
  }

  getCurrentUserName() {
    const { currentUser } = this.state;
    return currentUser && currentUser.email && currentUser.displayName;
  }

  renderQuoteSection() {
    return (
      <Header as="h4"> Signed in as {this.getCurrentUserName()} </Header>
    )
  }

  render() {
    return (
      <>
        <Header as="h1"> Submit a Quote </Header>
        {!!this.state.currentUser && this.renderQuoteSection()}
        <OauthButton
          oauthProvider={this.props.oauthProvider}
          currentUser={this.state.currentUser}
          handleChangeUser={this.handleChangeCurrentUser}
        />
      </>
    )
  }
};

SubmitQuotePanel.propTypes = {
  oauthProvider: PropTypes.object.isRequired,
}