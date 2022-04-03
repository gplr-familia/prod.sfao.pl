import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import axios from '../providers/axios';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CallIcon from '@material-ui/icons/Call';
import {withStyles} from '@material-ui/core';
import {compose} from 'recompose';
import PermissionHelper from '../helpers/PermissionHelper';

const styles = {
  card: {
    display: 'flex',
    float: 'left',
    marginRight: '2em'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  typography: {
    marginRight: '0.25em'
  }
};

class ChatList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios().get('users', this.state.params).then(({data}) => {
      this.setState({users: data.filter(user => user[PermissionHelper.isAdmin() ? 'doctors' : 'patients'].includes('/api/users/' + localStorage.getItem('id')))});
    });
  }

  render() {
    const {classes} = this.props;

    return (
      <div>
        {this.state.users.map(user => <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="headline" className={classes.typography}>{user.fullname}</Typography>
            <IconButton href={`/#/chat/${user.id}`}>
              <CallIcon/>
            </IconButton>
          </CardContent>
        </Card>)}
      </div>
    );
  }
}

const enhance = compose(
  withStyles(styles)
);

export default enhance(ChatList);
