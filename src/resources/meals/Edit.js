import React from 'react';
import {
  translate,
  Edit,
  SimpleForm,
  DisabledInput,
  required,
  ReferenceInput,
  SelectInput,
  LongTextInput
} from 'react-admin';
import {DateTimeInput} from 'react-admin-date-inputs';

export default translate(({translate, ...props}) => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id"/>
      <ReferenceInput filter={{no_paginate: true}} source="user" reference="users" validate={required()}>
        <SelectInput optionText="fullname"/>
      </ReferenceInput>
      <DateTimeInput
        source="at"
        locale="pl"
        label={translate('resources.meals.fields.at_time')}
        validate={required()}/>
      <LongTextInput source="description"/>
    </SimpleForm>
  </Edit>
));
