import React from 'react';
import {
  translate,
  required,
  Create,
  SimpleForm,
  SelectInput,
  NumberInput,
  ReferenceInput,
  BooleanInput,
  SelectArrayInput,
  FileInput,
  FileField
} from 'react-admin';
import {DateInput, DateTimeInput} from 'react-admin-date-inputs';
import {days} from './elements';
import {MeasurementTypeSelectInput} from './../fields';

export default translate(({translate, ...props}) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput filter={{no_paginate: true}} source="type" reference="measurement_types" validate={required()}>
        <SelectInput optionText={<MeasurementTypeSelectInput/>}/>
      </ReferenceInput>
      <NumberInput source="value" validate={required()}/>
      <DateTimeInput
        source="at"
        locale="pl"
        label={translate('resources.recommendations.fields.at_time')}
        validate={required()}/>
      <DateTimeInput
        source="ends"
        locale="pl"
        label={translate('resources.recommendations.fields.ends_time')}/>
      <BooleanInput source="whole_day"/>
      <SelectArrayInput source="recurring_day_of_week" choices={days}/>
      <DateInput
        source="recurring_from"
        locale="pl"
        label={translate('resources.recommendations.fields.recurring_from')}/>
      <DateInput
        source="recurring_to"
        locale="pl"
        label={translate('resources.recommendations.fields.recurring_to')}/>
      <ReferenceInput filter={{no_paginate: true}} source="user" reference="users" validate={required()}>
        <SelectInput optionText="fullname"/>
      </ReferenceInput>
      <FileInput source="attachment">
        <FileField source="attachment" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
));
