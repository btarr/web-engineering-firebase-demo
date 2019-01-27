import React, { PureComponent } from 'react';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types'

export default class MenuBar extends PureComponent {
  render() {
    return (
      <Menu
        fixed="top"
      >
      </Menu>
    )
  }
}

MenuBar.propTypes = {

}