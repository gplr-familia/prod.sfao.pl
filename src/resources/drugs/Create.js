import React from 'react';
import {required, translate, Create, SimpleForm, ReferenceInput, SelectInput, LongTextInput} from 'react-admin';
import {DateTimeInput} from 'react-admin-date-inputs';

export default translate(({translate, ...props}) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput filter={{no_paginate: true}} source="user" reference="users" validate={required()}>
        <SelectInput optionText="fullname"/>
      </ReferenceInput>
      <DateTimeInput
        source="at"
        locale="pl"
        label={translate('resources.drugs.fields.at_time')}
        validate={required()}/>
      <LongTextInput source="description"/>
    </SimpleForm>
  </Create>
));
