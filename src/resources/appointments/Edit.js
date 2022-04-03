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
      <ReferenceInput filter={{no_paginate: true}} source="patient" reference="users" validate={required()}>
        <SelectInput optionText="fullname"/>
      </ReferenceInput>
      <ReferenceInput filter={{no_paginate: true}} source="doctor" reference="users" validate={required()}>
        <SelectInput optionText="fullname"/>
      </ReferenceInput>
      <LongTextInput source="description"/>
      <DateTimeInput
        source="at"
        locale="pl"
        label={translate('resources.measurements.fields.at_time')}
        validate={required()}/>
    </SimpleForm>
  </Edit>
));
