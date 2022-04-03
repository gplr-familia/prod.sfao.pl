import React from 'react';
import {List, Datagrid, TextField, EditButton, ShowButton, ReferenceArrayField, SingleFieldList, ChipField} from 'react-admin';

export default (props) => (
  <List {...props} bulkActions={false}>
    <Datagrid>
      <TextField source="name"/>
      <ReferenceArrayField source="users" reference="users">
        <SingleFieldList>
          <ChipField source="fullname" />
        </SingleFieldList>
      </ReferenceArrayField>
      <EditButton basePath="/groups"/>
      <ShowButton basePath="/groups"/>
    </Datagrid>
  </List>
);