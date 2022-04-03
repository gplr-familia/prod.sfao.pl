import React from 'react';
import {
  List,
  Datagrid
} from 'react-admin';
import {MediaField} from './../fields';

export default ({...props}) => (
  <List {...props} bulkActions={false}>
    <Datagrid>
      <MediaField source="content_url" title="name"/>
    </Datagrid>
  </List>
);
