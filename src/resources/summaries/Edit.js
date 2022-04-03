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
import {DateInput} from 'react-admin-date-inputs';

export default translate(({translate, ...props}) => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id"/>
      <ReferenceInput filter={{no_paginate: true}} source="user" reference="users" validate={required()}>
        <SelectInput optionText="fullname"/>
      </ReferenceInput>
      <DateInput
        source="starts"
        locale="pl"
        label={translate('resources.summaries.fields.starts_time')}
        validate={required()}/>
      <DateInput
        source="ends"
        locale="pl"
        label={translate('resources.summaries.fields.ends_time')}
        validate={required()}/>
      <LongTextInput source="description"/>
    </SimpleForm>
  </Edit>
));
