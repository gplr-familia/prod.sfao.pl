import React from 'react';
import {required, translate, Create, SimpleForm, ReferenceInput, SelectInput, LongTextInput} from 'react-admin';
import {DateInput} from 'react-admin-date-inputs';

export default translate(({translate, ...props}) => (
  <Create {...props}>
    <SimpleForm>
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
  </Create>
));
