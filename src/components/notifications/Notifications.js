import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import Notification from './Notification';

const Notifications = ({classes = {}, notifications}) => (<List classes={{root: classes.list}}>
  {notifications.map(notification => [
    <Notification key={notification.id} notification={notification}/>,
    <Divider key={notification.id + '-divider'} component="li" />
  ])}
</List>);

Notifications.propTypes = {
  classes: PropTypes.object,
  notifications: PropTypes.array
};

export default Notifications;
