import React from 'react';
import {translate, required, Create, SimpleForm, SelectInput, ReferenceInput, FileInput, FileField} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import {DateTimeInput} from 'react-admin-date-inputs';

export default translate(({translate, ...props}) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput filter={{no_paginate: true}} source="user" reference="users" validate={required()}>
        <SelectInput optionText="fullname"/>
      </ReferenceInput>
      <FileInput source="attachment">
        <FileField source="attachment" title="title"/>
      </FileInput>
      <RichTextInput source="description"/>
      <DateTimeInput
        source="at"
        locale="pl"
        label={translate('resources.information_for_patients.fields.at')}
        validate={required()}/>
    </SimpleForm>
  </Create>
));
