import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Card } from 'semantic-ui-react'

function quoteToCardItem(quote) {
  return {
    header: `"${quote.get('text')}"`,
    description: `- ${quote.get('user')}`,
    color: 'teal',
  }
}

export default function QuoteGrid({
  quotes,
}) {
  return (
    <Card.Group
      className="quote-grid"
      items={quotes.map(quoteToCardItem).toJS()}
    />
  )
};

QuoteGrid.propTypes = {
  quotes: ImmutablePropTypes.listOf(
    ImmutablePropTypes.contains({
      user: PropTypes.string,
      text: PropTypes.string,
    })
  )
}

