import React from 'react';
import {Responsive} from 'react-admin';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import {withStyles} from '@material-ui/core/styles';
import NotificationsNone from '@material-ui/icons/NotificationsNone';
import NotificationsActive from '@material-ui/icons/NotificationsActive';
import Badge from './NotificationIndicatorBadge';
import classnames from 'classnames';
import {translate} from 'ra-core';
import {toggleDrawer} from '../actions/notificationsActions';

const styles = theme => ({
    menuItem: {
      color: theme.palette.text.secondary,
    }
  }
);

const sanitizeRestProps = ({
                             classes,
                             className,
                             translate,
                             userLogout,
                             locale,
                             redirectTo,
                             toggleDrawer,
                             ...rest
                           }) => rest;
/**
 * Logout button component, to be passed to the Admin component
 *
 * Used for the Logout Menu item in the sidebar
 */
const NotificationIndicator = ({classes, className, translate, notificationCount, ...rest, toggleDrawer}) => (
  <Responsive
    xsmall={
      <MenuItem
        className={classnames(classes.menuItem, className)}
        onClick={toggleDrawer}
        {...sanitizeRestProps(rest)}
      >
        {notificationCount > 0 ? <Badge badgeContent={notificationCount} color="primary">
          <NotificationsActive/>
        </Badge> : <NotificationsNone/>}
      </MenuItem>
    }
    medium={
      <Button
        className={classnames(className)}
        size="small"
        onClick={toggleDrawer}
        {...sanitizeRestProps(rest)}
      >
        {notificationCount > 0 ? <Badge badgeContent={notificationCount} color="primary">
          <NotificationsActive/>
        </Badge> : <NotificationsNone/>}
      </Button>
    }
  />
);

NotificationIndicator.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  translate: PropTypes.func,
  notificationCount: PropTypes.number,
  toggleDrawer: PropTypes.func
};

const mapStateToProps = state => ({
  theme: state.theme,
  notificationCount: 'notifications' in state.admin.resources ? Object.values(state.admin.resources.notifications.data).filter(n => n.status === 'CREATED').length : 0
});

const mapDispatchToProps = (dispatch, {redirectTo}) => ({
  toggleDrawer: () => dispatch(toggleDrawer())
});

const enhance = compose(
  translate,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
);

export default enhance(NotificationIndicator);
