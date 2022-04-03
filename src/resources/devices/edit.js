import React from 'react';
import {Edit, SimpleForm, TextInput, DisabledInput, LongTextInput} from 'react-admin';

export default (props) => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id"/>
      <TextInput source="name"/>
      <LongTextInput source="description"/>
    </SimpleForm>
  </Edit>
);
