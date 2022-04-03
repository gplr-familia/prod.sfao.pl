import React from 'react';
import {
  required,
  translate,
  Edit,
  SimpleForm,
  DisabledInput,
  SelectInput,
  NumberInput,
  ReferenceInput
} from 'react-admin';
import {DateTimeInput} from 'react-admin-date-inputs';
import {MeasurementTypeSelectInput} from './../fields';

const MeasurementTitle = ({translate, record}) => {
  return <span>{`${translate('resources.measurements.name', 1)}`} </span>;
};

export default translate(({translate, permissions, ...props}) => (
  <Edit title={<MeasurementTitle translate={translate}/>} {...props}>
    <SimpleForm>
      <DisabledInput source="id"/>
      <ReferenceInput filter={{no_paginate: true}} source="type" reference="measurement_types" validate={required()}>
        <SelectInput optionText={<MeasurementTypeSelectInput/>}/>
      </ReferenceInput>
        <ReferenceInput filter={{no_paginate: true}} source="device" reference="devices">
            <SelectInput optionText="name"/>
        </ReferenceInput>
      <NumberInput source="value" validate={required()}/>
      <DateTimeInput
        source="at"
        locale="pl"
        label={translate('resources.measurements.fields.at')}
        validate={required()}
      />
      {permissions && permissions.includes('MEASUREMENT_EDIT_USERS') &&
      <ReferenceInput filter={{no_paginate: true}} source="user" reference="users" validate={required()}>
        <SelectInput optionText="fullname"/>
      </ReferenceInput>}
    </SimpleForm>
  </Edit>
));
