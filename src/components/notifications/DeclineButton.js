import React from 'react';
import {translate} from 'react-admin';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {declineNotification} from '../../actions/notificationsActions';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const DeclineButton = ({declineNotification, record, translate, onClick}) => (
  <Button onClick={() => {
    declineNotification(record.id, record);
    if (onClick) {
      onClick();
    }
  }}>{translate('components.notifications.declineButton.label')}</Button>);

DeclineButton.propTypes = {
  declineNotification: PropTypes.func,
  record: PropTypes.object,
  onClick: PropTypes.func,
};

const enhance = compose(
  translate,
  connect(null, {declineNotification})
);

export default enhance(DeclineButton);
