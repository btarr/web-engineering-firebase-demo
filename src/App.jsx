import React from 'react';
import QuoteGrid from './components/quotes/QuoteGrid';
import { fromJS } from 'immutable';
import MenuBar from './components/menu/MenuBar';
import SubmitQuotePanel from './components/submitQuote/SubmitQuotePanel';
import { Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import './style/app.css'

const testQuotes = fromJS([
  {
    user: "Tom Blue",
    text: "I'm blue",
  },
  {
    user: "Thom Yorke",
    text: "My head is a radio",
  }
])

export default function App({
  oauthProvider,
}) {
  return (
    <>
      <MenuBar/>
      <div className="main-page">
        <Grid
          divided={true}
        >
          <Grid.Row>
            <Grid.Column width={10}>
              <QuoteGrid quotes={testQuotes} />
            </Grid.Column>
            <Grid.Column width={4}>
              <SubmitQuotePanel oauthProvider={oauthProvider} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  )
}

App.propTypes = {
  oauthProvider: PropTypes.object.isRequired,
}