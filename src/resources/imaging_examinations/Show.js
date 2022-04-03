import React from 'react';
import {Show, SimpleShowLayout, ReferenceField, TextField, DateField} from 'react-admin';
import {MediaField} from '../fields';
import FullNameField from '../fields/FullNameField';

const dateOptions = {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};

export default ({permissions, ...props}) => (
  <Show {...props}>
    <SimpleShowLayout>
      {permissions && permissions.includes('IMAGING_EXAMINATIONS_SHOW_USERS') &&
      <ReferenceField source="user" reference="users">
        <FullNameField source="fullname"/>
      </ReferenceField>}

      <MediaField source="attachment.content_url" title="attachment.name"/>

      <DateField source="at" locales="pl" options={dateOptions}/>

      <TextField source="description"/>
    </SimpleShowLayout>
  </Show>
)
