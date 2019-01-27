import React, { PureComponent } from 'react';
import { Menu, Icon, Header} from 'semantic-ui-react';
import PropTypes from 'prop-types'
import '../../style/menu/menubar.css';

function renderWelcome() {
  return (
    <>
      <Icon
        name="quote left"
        className="quote-icon"
        inverted={true}
      />
      <Header
        as="h1"
        className="quote-me-title"
        inverted={true}
      >
        Quote me on this
      </Header>
      <Icon
        name="quote right"
        className="quote-icon"
        inverted={true}
      />
    </>
  )
}

function renderSignInButton() {
  return (
    <div class="g-signin2"/>
  )
}

export default class MenuBar extends PureComponent {
  render() {
    return (
      <Menu
        fixed="top"
        color="teal"
        inverted={true}
      >
        {renderWelcome()}
      </Menu>
    )
  }
}

MenuBar.propTypes = {
}