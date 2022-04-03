import React from 'react';
import {
  required,
  translate,
  Edit,
  SimpleForm,
  DisabledInput,
  SelectInput,
  NumberInput,
  ReferenceInput,
  BooleanInput,
  SelectArrayInput,
  FileInput
} from 'react-admin';
import {DateInput, DateTimeInput} from 'react-admin-date-inputs';
import {days} from './elements';
import {MediaField, MeasurementTypeSelectInput} from './../fields';

const RecommendationTitle = ({translate}) => {
  return <span>{`${translate('resources.recommendations.name', 1)}`} </span>;
};

export default translate(({translate, ...props}) => (
  <Edit title={<RecommendationTitle translate={translate}/>} {...props}>
    <SimpleForm>
      <DisabledInput source="id"/>
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
        <MediaField source="content_url" title="name" />
      </FileInput>
    </SimpleForm>
  </Edit>
));
