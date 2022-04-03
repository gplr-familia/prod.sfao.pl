import React, {Component} from 'react';
import moment from 'moment';
import 'moment/locale/pl';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {CloudUpload, Send} from '@material-ui/icons';

import {GET_ONE, CREATE, translate} from 'react-admin';

import restClient from '../../providers/rest';
import uploadClient from '../../providers/upload';

import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import {compose} from 'recompose';
import AppConfig from '../../AppConfig';
import MessageHelper from '../../helpers/MessageHelper';

const styles = theme => ({
  wrapper: {background: '#ffffff', padding: '1em'},
  list: {overflow: 'hidden'},
  message: {
    margin: '10px 0',
    width: '48%',
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    borderRadius: '4px'
  }, // https://material-ui.com/style/color/
  messageHis: {background: theme.palette.primary.main}, // https://material-ui.com/style/color/
  messageMy: {background: theme.palette.secondary.main, left: '52%'}, // https://material-ui.com/style/color/
  replyField: {padding: '0 10px'},
  table: {width: '100%'},
  tableCellWithTextField: {width: '80%'},
  tableCellWithButton: {width: '20%', verticalAlign: 'bottom'},
  fileInput: {display: 'none'},
  rightIcon: {marginLeft: '.5em'},
});

const Message = withStyles(styles)(({classes, message}) => {
  const listItemClassNames = classNames(classes.message, {
    [classes.messageMy]: true === MessageHelper.isMessageOwnedByMe(message),
    [classes.messageHis]: true !== MessageHelper.isMessageOwnedByMe(message),
  });

  return <ListItem className={listItemClassNames} disabled={false} divider={true}>
    {/*<ListItemAvatar><Avatar src="http://lorempixel.com/128/128/people/3/"/></ListItemAvatar>*/}
    <ListItemText
      primary={message.body}
      secondary={`${message.sender.fullname} - ${moment(message.created_at).fromNow()}`}

    />
    <ListItemSecondaryAction>
      {message.attachment ? <IconButton aria-label={message.attachment.name} variant="container" target="_blank"
                                        href={`${AppConfig.endpoint}/public/media/${message.attachment.content_url}`}>
        <CloudUpload/>
      </IconButton> : null}
      {/*<IconButton variant="container" target="_blank" href={`/#/messages/${message.id}`}>*/}
      {/*<Edit/>*/}
      {/*</IconButton>*/}
    </ListItemSecondaryAction>
  </ListItem>;
});

class ThreadShow extends Component {
  constructor(props) {
    super(props);

    this.thread_id = props.match.params.id;

    this.state = {
      thread: undefined,
      messages: [],
      body: undefined,
      attachment: undefined,
    };
  }

  componentDidMount() {
    this.loadMessages();
  }

  loadMessages() {
    restClient(GET_ONE, 'threads/my', {id: this.thread_id}).then(({data}) => {
      this.setState({
        thread: data,
        messages: data.messages.map(message => <Message key={message.created_at} message={message}/>),
      });
    });
  }

  onInputChangeReply(body) {
    this.setState({body});
  }

  sendMessage() {
    uploadClient(restClient)(CREATE, 'messages/send', {
      data: {
        thread: this.thread_id,
        body: this.state.body,
        attachment: this.state.attachment,
      },
    }).then(() => {
      this.loadMessages();
      this.setState({body: ''});
      this.clearFile();
    });
  }

  loadFile(target) {
    this.setState({attachment: {rawFile: target.files[0]}});
  }

  clearFile() {
    this.setState({attachment: undefined});
  }

  render() {
    const {classes, translate} = this.props;

    return (
      <Paper className={classes.wrapper}>
        <Typography variant="title">{this.state.thread ? this.state.thread.subject : ''}</Typography>
        <List className={classes.list}>
          {this.state.messages}
        </List>
        <div style={styles.replyField}>
          <form onSubmit={event => this.sendMessage()}>
            <table style={styles.table}>
              <tbody>
              <tr>
                <td style={styles.tableCellWithTextField}>
                  <TextField
                    placeholder={translate('resources.threads/my.custom.show.reply.hintText')}
                    multiline={true}
                    fullWidth={true}
                    rows={4}
                    value={this.state.body}
                    onChange={event => this.onInputChangeReply(event.target.value)}
                  />
                </td>
                <td style={styles.tableCellWithButton}>
                  <input id="contained-button-file"
                         type="file"
                         onChange={e => this.loadFile(e.target)}
                         style={styles.fileInput}/>
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span">
                      {translate('resources.threads/my.custom.show.attachment')}
                      <CloudUpload style={styles.rightIcon}/>
                    </Button>
                  </label>
                </td>
                <td style={styles.tableCellWithButton}>
                  <Button
                    variant="contained"
                    onClick={event => this.sendMessage()}
                    color="primary"
                  >
                    {translate('resources.threads/my.custom.show.reply.send')}
                    <Send style={styles.rightIcon}/>
                  </Button>
                </td>
              </tr>
              </tbody>
            </table>
          </form>
        </div>
      </Paper>
    );
  }
}

ThreadShow.contextTypes = {
  translate: PropTypes.func,
  classes: PropTypes.object
};

const enhance = compose(
  translate,
  withStyles(styles)
);

export default enhance(ThreadShow);
