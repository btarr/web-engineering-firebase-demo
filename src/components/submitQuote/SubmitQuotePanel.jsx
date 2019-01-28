import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Header, Responsive, List } from 'semantic-ui-react';
import OauthButton from './OauthButton';
import { addLoginListener } from '../../utilities/googleOauthUtils';
import QuoteInput from './QuoteInput';
import { MOBILE_MAX_WIDTH } from '../../constants/responsiveConstants';
import '../../style/submitQuote/submitquotepanel.css';

export default class SubmitQuotePanel extends PureComponent {
  constructor() {
    super();
    this.handleChangeCurrentUser = this.handleChangeCurrentUser.bind(this);
    this.state = {
      currentUser: null,
    }
  }

  componentWillMount() {
    addLoginListener(this.handleChangeCurrentUser);
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
  
  renderHeader() {
    return (
      <Header as="h1"> Submit a Quote </Header>
    );
  }

  renderQuoteInput() {
    return (
      <QuoteInput
        displayName={this.getUserDisplayName()}
      />
    )
  }

  renderOauthButton() {
    return (
      <OauthButton
        oauthProvider={this.props.oauthProvider}
        currentUser={this.state.currentUser}
      />
    );
  }

  renderMobileLayout() {
    return (
      <List>
        <List.Item>
          {this.renderHeader()}
        </List.Item>
        <List.Item>
          {!!this.state.currentUser && (this.renderQuoteInput())}
        </List.Item>
        <List.Item>
          {this.renderOauthButton()}
        </List.Item>
      </List>
    );
  }

  renderDesktopLayout() {
    return (
      <>
        {this.renderHeader()}
        {!!this.state.currentUser && this.renderQuoteInput()}
        {this.renderOauthButton()}
      </>
    );
  }

  render() {
    return (
      <>
        <Responsive as="div" maxWidth={MOBILE_MAX_WIDTH}>
          {this.renderMobileLayout()}
        </Responsive>
        <Responsive as="div" minWidth={MOBILE_MAX_WIDTH + 1}>
          {this.renderDesktopLayout()}
        </Responsive>
      </>
    )
  }
};

SubmitQuotePanel.propTypes = {
  oauthProvider: PropTypes.object.isRequired,
}