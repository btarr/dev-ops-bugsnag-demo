import React, { PureComponent } from 'react';
import {
  Menu,
  Header,
} from 'semantic-ui-react';
import { PRIMARY_COLOR } from '../../constants/colors';
import {
  withRouter,
  Link,
} from 'react-router-dom';
import {
  INDEX_PAGE_ROUTE,
  CALENDAR_PAGE_ROUTE,
  STOCKS_PAGE_ROUTE,
  TODO_PAGE_ROUTE,
} from '../../constants/routes';
import PropTypes from 'prop-types';
import {
  bugsnagClient
} from '../../utils/bugsnagUtils';

class MenuBar extends PureComponent {

  getActivePathName() {
    return this.props.location.pathname;
  }

  renderMenuItem(name, route) {
    const pathname = this.getActivePathName();
    if (!pathname) {
      // won't throw error here but we want to notify if this is broken, don't want customers seeing a broken nav bar
      bugsnagClient.notify('pathname not passed in, potential problem with MenuBar.jsx');
    }
    return (
      <Menu.Item
        active={pathname === route}
      >
        <Link
          to={route}
        >
          {name}
        </Link>
      </Menu.Item>
    )
  }

  render() {
    return (
      <Menu
        color={PRIMARY_COLOR}
        fixed="top"
        inverted={true}
      >
        {this.renderMenuItem('SÜT', INDEX_PAGE_ROUTE)}
        {this.renderMenuItem('Calendar', CALENDAR_PAGE_ROUTE)}
        {this.renderMenuItem('Stocks', STOCKS_PAGE_ROUTE)}
        {this.renderMenuItem('To-Do', TODO_PAGE_ROUTE)}
        {this.renderMenuItem('Test', '/testt')}
      </Menu>
    );
  }
}

MenuBar.propTypes = {
  location: PropTypes.object.isRequired,
}

export default withRouter(MenuBar);