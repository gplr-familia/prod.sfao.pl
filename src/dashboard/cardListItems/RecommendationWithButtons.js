import React from 'react';

import {FormattedRelative} from 'react-intl';

import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import {Warning} from '@material-ui/icons';

import styles from './styles';
import DoneButton from '../../components/recommendations/DoneButton';
import NotDoneButton from '../../components/recommendations/NotDoneButton';

const RecommendationWithButtons = (translate, item) => {
  let icon = <Warning style={styles.icon}/>;

  return (
    <ListItem key={item.id} containerElement={<a href={`/#/recommendations/${item.id}/show`}>x</a>}>
      <div style={styles.wrapper}>
        <div>
          {icon}
          <div style={styles.column}>
            <h2 style={styles.header}>Wykonaj {item.type.name} dla {item.value} {item.type.unit}</h2>
          </div>
          <div style={styles.date}>
            <FormattedRelative value={item.at}/>
          </div>
        </div>
        {item.status === 'EVALUATE' && <div style={styles.buttons}>
          <DoneButton record={item}/>
          <NotDoneButton record={item}/>
        </div>}
      </div>
      <Divider style={styles.divider}/>
    </ListItem>
  )
};

export default RecommendationWithButtons;
