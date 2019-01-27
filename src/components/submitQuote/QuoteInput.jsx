import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Form, Icon, Header } from 'semantic-ui-react'
import { createQuote } from '../../utilities/quoteDatabaseUtils';

export default class QuoteInput extends PureComponent {
  constructor() {
    super();
    this.handleSubmitQuote = this.handleSubmitQuote.bind(this);
    this.handleUpdateQuoteText = this.handleUpdateQuoteText.bind(this);
    this.state = {
      quoteText: '',
    }
  }

  handleSubmitQuote() {
    const { quoteText } = this.state;
    if (!quoteText) {
      return;
    }
    createQuote({
      text: quoteText,
      user: this.props.displayName,
    });
    this.setState({
      quoteText: '',
    })
  }

  handleUpdateQuoteText(_, { value: quoteText }) {
    this.setState({ quoteText });
  }

  render() {
    return (
        <Form>
          <Form.Field>
            <Icon
              name="quote left"
              className="quote-icon"
            />
            <Input
              placeholder="Enter your quote..."
              value={this.state.quoteText}
              onChange={this.handleUpdateQuoteText}
            />
            <Header sub={true}>
              - {this.props.displayName}
            </Header>
          </Form.Field>
          <Button
            type="submit"
            primary={true}
            className="submit-quote-button"
            disabled={!this.state.quoteText}
            onClick={this.handleSubmitQuote}
          >
            Quote me on this
          </Button>
        </Form>
    );
  }
}

QuoteInput.propTypes = {
  displayName: PropTypes.string.isRequired,
}