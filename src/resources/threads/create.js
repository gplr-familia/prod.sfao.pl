import React from 'react';
import {translate, required, Create, SimpleForm, SelectInput, ReferenceInput, LongTextInput, TextInput} from 'react-admin';

export default translate(({translate, ...props}) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="subject" validate={required()}/>
      <ReferenceInput filter={{no_paginate: true}} source="user" reference="users" validate={required()}>
        <SelectInput optionText="fullname"/>
      </ReferenceInput>
      <LongTextInput source="body" validate={required()}/>
    </SimpleForm>
  </Create>
));
