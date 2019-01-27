import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import OauthButton from './OauthButton';
import { getCurrentUser } from '../../utilities/googleOauthUtils';
import QuoteInput from './QuoteInput';
import '../../style/submitQuote/submitquotepanel.css';

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

  getUserDisplayName() {
    const { currentUser } = this.state;
    return currentUser && currentUser.displayName || currentUser.email;
  }

  renderQuoteInput() {
    return (
      <QuoteInput
        displayName={this.getUserDisplayName()}
      />
    )
  }

  render() {
    return (
      <>
        <Header as="h1"> Submit a Quote </Header>
        {!!this.state.currentUser && this.renderQuoteInput()}
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