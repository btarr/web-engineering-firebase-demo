import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Card, Icon, Grid} from 'semantic-ui-react'
import { fromJS } from 'immutable';
import { fetchQuotes, subscribeToQuotesChanges } from '../../utilities/quoteDatabaseUtils';

function quoteToCardItem(quote) {
  return {
    header: `"${quote.get('text')}"`,
    meta: `- ${quote.get('user')}`,
    description: `${quote.get('date')}`,
    color: 'teal',
  }
}

export default class QuoteGrid extends PureComponent{
  constructor() {
    super()
    this.handleSetQuotesFromFetch = this.handleSetQuotesFromFetch.bind(this);
    this.state = {
      quotes: fromJS([]),
      fetching: true,
    }
  }

  handleSetQuotesFromFetch(quotesSnapshot) {
    const quotesValue = quotesSnapshot.val()
    this.setState({
      quotes: quotesValue && fromJS(quotesValue).toList(),
      fetching: false,
    });
  };

  componentWillMount() {
    fetchQuotes().then(this.handleSetQuotesFromFetch);
    subscribeToQuotesChanges(this.handleSetQuotesFromFetch)
  }

  render() {
    const { quotes, fetching } = this.state;
    if (fetching) {
      return (
        <Grid
          columns={1}
          centered={true}
          padded={true}
        >
          <Grid.Row>
            <Icon
              loading={true}
              size="big"
              name="spinner"
              color="grey"
            />
          </Grid.Row>
        </Grid>
      )
    }
    return (
      <Card.Group
        className="quote-grid"
        items={quotes && quotes.map(quoteToCardItem).toJS()}
      />
    )
  }
};

