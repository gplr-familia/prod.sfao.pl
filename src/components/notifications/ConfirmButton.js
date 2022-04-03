import React from 'react';
import {translate, refreshView as refreshViewAction} from 'react-admin';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {confirmNotification} from '../../actions/notificationsActions';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ConfirmButton = ({confirmNotification, record, translate, onClick}) => (
  <Button onClick={() => {
    confirmNotification(record.id, record);
    if (onClick) {
      onClick();
    }
  }}>{translate('components.notifications.confirmButton.label')}</Button>);

ConfirmButton.propTypes = {
  confirmNotification: PropTypes.func,
  record: PropTypes.object,
  onClick: PropTypes.func,
};

const enhance = compose(
  translate,
  connect(null, {confirmNotification, refreshView: refreshViewAction})
);

export default enhance(ConfirmButton);
