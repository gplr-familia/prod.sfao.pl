import React from 'react';
import {
  List,
  Datagrid,
  ReferenceField,
  DateField,
  Filter,
  SelectInput,
  ReferenceInput
} from 'react-admin';
import {FullNameField, MediaField} from './../fields';

const dateOptions = {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};

const Filters = ({permissions, ...props}) => <Filter {...props}>
  {permissions && permissions.includes('INFORMATION_FROM_PATIENT_LIST_USERS') &&
  <ReferenceInput filter={{no_paginate: true}} source="user" reference="users">
    <SelectInput optionText="fullname"/>
  </ReferenceInput>}
</Filter>;

export default ({permissions, ...props}) => {
  return (
    <List {...props} filters={<Filters permissions={permissions}/>} bulkActions={false}>
      <Datagrid>
        {permissions && permissions.includes('INFORMATION_FROM_PATIENT_LIST_USERS') &&
        <ReferenceField source="user" reference="users">
          <FullNameField source="fullname"/>
        </ReferenceField>}

        <MediaField source="attachment.content_url" title="attachment.name" />

        <DateField source="at" locales="pl" options={dateOptions}/>
      </Datagrid>
    </List>
  );
};
