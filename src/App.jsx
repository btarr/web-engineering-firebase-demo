import React, { PureComponent } from 'react';
import QuoteGrid from './components/quotes/QuoteGrid';
import { fromJS } from 'immutable';
import MenuBar from './components/menu/MenuBar';
import SubmitQuotePanel from './components/submitQuote/SubmitQuotePanel';
import { Grid, Responsive } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import { MOBILE_MAX_WIDTH } from './constants/responsiveConstants';
import './style/app.css'

export default class App extends PureComponent {

  renderQuoteGrid() {
    return (
      <QuoteGrid />
    );
  }

  renderSubmitQuotePanel() {
    return (
      <SubmitQuotePanel oauthProvider={this.props.oauthProvider} />
    );
  }

  renderDesktopLayout(oauthProvider) {
    return (
      <>
        <Grid
          divided={true}
        >
          <Grid.Row>
            <Grid.Column width={10}>
              {this.renderQuoteGrid()}
            </Grid.Column>
            <Grid.Column width={4}>
              {this.renderSubmitQuotePanel()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  }

  renderMobileLayout() {
    return (
      <>
          <Grid
            divided="vertically"
          >
            <Grid.Row>
              {this.renderQuoteGrid()}
            </Grid.Row>
            <Grid.Row>
              {this.renderSubmitQuotePanel()}
            </Grid.Row>
          </Grid>
      </>
    )
  }

  render() {
    return (
      <>
        <MenuBar />
        <div className="main-page">
          <Responsive as="div" maxWidth={MOBILE_MAX_WIDTH}>
            {this.renderMobileLayout()}
          </Responsive>
          <Responsive as="div" minWidth={MOBILE_MAX_WIDTH + 1}>
            {this.renderDesktopLayout()}
          </Responsive>
        </div>
      </>
    )
  }
}

App.propTypes = {
  oauthProvider: PropTypes.object.isRequired,
}