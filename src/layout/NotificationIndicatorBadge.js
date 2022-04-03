import Badge from '@material-ui/core/Badge';
import {withStyles} from '@material-ui/core/styles';

const NotificationIndicatorBadge = withStyles(theme => ({
  badge: {
    backgroundColor: '#ffeb3b',
    border: `2px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    width: '16px',
    height: '16px'
  }
}))(Badge);

export default NotificationIndicatorBadge;
