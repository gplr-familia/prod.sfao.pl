import React from 'react';
import {Create, SimpleForm, TextInput, LongTextInput} from 'react-admin';

export default (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name"/>
      <LongTextInput source="description"/>
    </SimpleForm>
  </Create>
);
