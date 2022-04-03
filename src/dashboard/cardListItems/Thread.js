import React from 'react';

import {FormattedRelative} from 'react-intl';

import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import {PermIdentity} from '@material-ui/icons';

import styles from './styles';

const messageCharactersLimit = 200;

const Thread = (translate, item) => {
  const lastMessage = item.messages[item.messages.length - 1];
  const body = item.messages[item.messages.length - 1].body;
  const message = body > messageCharactersLimit ? `${body.substr(0, messageCharactersLimit)}...` : body;

  return (
    <ListItem style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}} key={item.id} containerElement={<a href={`/#/threads/my/${item.id}`} >x</a>}>
      <div>
        <PermIdentity style={styles.icon} />
        <div style={styles.column}>
          <h2 style={styles.header}>{lastMessage.sender.fullname}</h2>
          <h5 style={styles.subHeader}>Temat wątku: {item.subject}</h5>
        </div>
        <div style={styles.date}><FormattedRelative value={item.messages[item.messages.length - 1].created_at}/></div>
      </div>
      <div>
        <p>Wiadomość: {message}</p>
      </div>
      <Divider style={styles.divider}/>
    </ListItem>
  );
};

export default Thread;
