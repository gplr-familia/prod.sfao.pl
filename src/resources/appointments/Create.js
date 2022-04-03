import React from 'react';
import {required, translate, Create, SimpleForm, ReferenceInput, SelectInput, LongTextInput} from 'react-admin';
import {DateTimeInput} from 'react-admin-date-inputs';

export default translate(({translate, ...props}) => (
  <Create {...props}>
    <SimpleForm>
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
  </Create>
));
