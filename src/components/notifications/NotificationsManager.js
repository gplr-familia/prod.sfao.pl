import React from 'react';
import {SwipeableDrawer, withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import {translate} from 'react-admin';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Notifications from './Notifications';
import moment from 'moment';

const styles = theme => ({
  drawerPaper: {
    marginTop: '48px',
    width: '16em'
  },
  list: {
    paddingBottom: '48px'
  }
});

const NotificationsManager = ({classes, notifications, open}) => (<SwipeableDrawer
  variant={'persistent'}
  classes={{
    paper: classes.drawerPaper
  }}
  anchor={'right'}
  open={open}
  onOpen={() => {
    console.log('asd')
  }}
  onClose={() => {
    console.log('asd')
  }}
>
  <Notifications classes={{list: classes.list}} notifications={notifications}/>
</SwipeableDrawer>);

NotificationsManager.propTypes = {
  notifications: PropTypes.array,
  open: PropTypes.bool,
  classes: PropTypes.object,
  translate: PropTypes.func
};

const mapStateToProps = state => ({
  notifications: 'notifications' in state.admin.resources ?
    Object.values(state.admin.resources.notifications.data)
      .filter(({status}) => status === 'CREATED')
       .sort((a, b) => moment(a.at).isBefore(moment(b.at))) :
    [],
  open: state.custom_notifications.drawerOpen
});

const enhance = compose(
  translate,
  connect(
    mapStateToProps
  ),
  withStyles(styles)
);

export default enhance(NotificationsManager);
