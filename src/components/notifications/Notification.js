import ListItemText from '@material-ui/core/ListItemText';
import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import {translate} from 'react-admin';
import moment from 'moment';
import {compose} from 'recompose';
import {withStyles} from '@material-ui/core';
import DeclineButton from './DeclineButton';
import ConfirmButton from './ConfirmButton';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const styles = theme => ({
    inline: {
      display: 'inline'
    },
    item: {
      flexDirection: 'column'
    },
    itemCREATED: {
    },
    itemCONFIRMED: {
    },
    itemDECLINED: {
    }
  }
);

const Notification = ({classes, translate, notification: {status, at, metadata: {type: {name, unit}, value}, ...record}, onConfirmClick, onDeclineClick}) => (
  <ListItem
    className={classnames(classes.item, classes[`item${status}`])}
  >
    <div>
      <ListItemText
        primary={translate('notifications.info.recommendations.title')}
        secondary={<Fragment>
          <Typography className={classes.inline} component="span" variant="body2" color={'textPrimary'}>
            {moment(at).fromNow()}
          </Typography>
          {` - ${translate('notifications.info.recommendations.text', {name, unit, value})}`}
        </Fragment>}/>
    </div>
    <div>
      <ConfirmButton onClick={onConfirmClick} record={record}/>
      <DeclineButton onClick={onDeclineClick} record={record}/>
    </div>
  </ListItem>);

Notification.propTypes = {
  notification: PropTypes.object,
  onConfirmClick: PropTypes.func,
  onDeclineClick: PropTypes.func,
};

const enhance = compose(
  translate,
  withStyles(styles)
);

export default enhance(Notification);
