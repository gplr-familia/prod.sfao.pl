import React from 'react';
import {translate, List, SimpleList, DeleteButton, Pagination} from 'react-admin';
import {withStyles} from '@material-ui/core/styles';
import {Drafts, Mail} from '@material-ui/icons';

const style = {
  tertiary: {marginRight: '4em'}
};

const deleteAction = (record) => {
  return <DeleteButton basePath="/threads" record={record} resource="threads" redirect={`/threads/my`}/>
};

const ThreadPagination = props => <Pagination rowsPerPageOptions={[]} {...props} />;

export default withStyles(style)(translate(({classes, translate, ...props}) => (
  <List {...props} pagination={<ThreadPagination />} bulkActions={false}>
    <SimpleList
      classes={{tertiary: classes.tertiary}}
      primaryText={record => record.subject}
      secondaryText={record => `${translate('resources.threads/my.custom.list.secondaryTextPrefix')} ${record.created_by ? record.created_by.fullname : ''}`}
      tertiaryText={record => new Date(record.created_at).toLocaleDateString()}
      rightIcon={deleteAction}
      leftIcon={record => (record.has_been_read ? <Drafts/> : <Mail/>)}
    >
    </SimpleList>
  </List>
)));
