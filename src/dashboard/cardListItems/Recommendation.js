import React from 'react';

import {FormattedRelative} from 'react-intl';

import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import {Warning} from '@material-ui/icons';

import styles from './styles';

const Recommendation = (translate, item) => {
  let icon = <Warning style={styles.icon}/>;

  return (
    <ListItem key={item.id} containerElement={<a href={`/#/recommendations/${item.id}/show`}>x</a>}>
      <div style={styles.wrapper}>
        <div>
          {icon}
          <div style={styles.column}>
            <h2 style={styles.header}>{item.value}</h2>
            <h5 style={styles.subHeader}>{item.type.name}</h5>
          </div>
          <div style={styles.date}>
            <FormattedRelative value={item.at}/>
          </div>
        </div>
      </div>
      <Divider style={styles.divider}/>
    </ListItem>
  )
};

export default Recommendation;
