import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Card, Icon, Grid, Header, Responsive } from 'semantic-ui-react'
import { fromJS } from 'immutable';
import { fetchQuotes, subscribeToQuotesChanges, unsubscribeFromQuotesChanges } from '../../utilities/quoteDatabaseUtils';
import { MOBILE_MAX_WIDTH } from '../../constants/responsiveConstants';
import moment from 'moment';
import ShowMoreButton from './ShowMoreButton';

function quoteToCardItem(quote) {
  return {
    header: `"${quote.get('text')}"`,
    meta: `- ${quote.get('user')}`,
    description: `${quote.get('date')}`,
    color: 'teal',
  }
}

function sortQuotesByDate(quoteA, quoteB) {
  const dateA = moment(quoteA.get('date'), 'MMMM Do YYYY');
  const dateB = moment(quoteB.get('date'), 'MMMM Do YYYY');
  if (dateA > dateB) {
    return -1;
  }
  if (dateA < dateB) {
    return 1;
  }
  return 0;
}

export default class QuoteGrid extends PureComponent{
  constructor() {
    super()
    this.handleSetQuotesFromFetch = this.handleSetQuotesFromFetch.bind(this);
    this.handleShowMore = this.handleShowMore.bind(this);
    this.state = {
      quotes: fromJS([]),
      fetching: true,
      maxShown: 8,
    }
  }

  handleSetQuotesFromFetch(quotesSnapshot) {
    const quotesValue = quotesSnapshot.val()
    this.setState({
      quotes: quotesValue && fromJS(quotesValue).toList().sort(sortQuotesByDate),
      fetching: false,
    });
  };

  handleShowMore() {
    this.setState((state) => {
      return { maxShown: state.maxShown + 8 }
    });
  }

  componentWillMount() {
    fetchQuotes().then(this.handleSetQuotesFromFetch);
    this.listener = subscribeToQuotesChanges(this.handleSetQuotesFromFetch)
  }

  componentWillUnmount() {
    fetchQuotes().then(this.handleSetQuotesFromFetch);
    unsubscribeFromQuotesChanges(this.listener);
  }

  renderLoadingIcon() {
    return (
      <Icon
        loading={true}
        size="big"
        name="spinner"
        color="grey"
      />
    );
  }

  renderEmptyState() {
    return (
      <Header as="h3"> No quotes here, why not go ahead and add your own! </Header>
    )
  }

  renderMobileLayout() {
    const { quotes, maxShown } = this.state;
    const quotesToRender = quotes && quotes.filter((_, index) => index < maxShown).map(quoteToCardItem).toJS();
    return (
      <>
      <Card.Group
        className="quote-grid"
        items={quotesToRender}
      />
      {quotesToRender.length >= maxShown && <ShowMoreButton onClick={this.handleShowMore}/>}
      </>
    );
  }

  renderDesktopLayout() {
    const { quotes } = this.state;
    return (
      <Card.Group
        className="quote-grid"
        items={quotes && quotes.map(quoteToCardItem).toJS()}
      />
    );
  }

  render() {
    const { quotes, fetching } = this.state;
    if (!quotes) {
      return (
        <Grid
          columns={1}
          centered={true}
          padded={true}
        >
          <Grid.Row>
            {fetching ? this.renderLoadingIcon() : this.renderEmptyState()}
          </Grid.Row>
        </Grid>
      )
    }
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

