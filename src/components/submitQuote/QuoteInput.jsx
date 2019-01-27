import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Form, Icon, Header } from 'semantic-ui-react'

export default class QuoteInput extends PureComponent {
  handleSubmitQuote() {

  }

  render() {
    return (
        <Form>
          <Form.Field>
            <Icon
              name="quote left"
              className="quote-icon"
            />
            <Input placeholder="Enter your quote..." />
            <Header sub={true}>
              - {this.props.displayName}
            </Header>
          </Form.Field>
          <Button type="submit" primary={true} className="submit-quote-button" >Quote me on this</Button>
        </Form>
    );
  }
}

QuoteInput.PropTypes = {
  displayName: PropTypes.string.isRequired,
}