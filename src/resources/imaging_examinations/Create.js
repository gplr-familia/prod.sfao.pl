import React from 'react';
import {required, translate, Create as CreateScreen, SimpleForm, SelectInput, ReferenceInput, FileInput, FileField} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import {DateTimeInput} from 'react-admin-date-inputs';
import {compose} from 'recompose';

const Create = (props) => (
  <CreateScreen {...props}>
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
        label={translate('resources.recommendations.fields.at_time')}
        validate={required()}/>
    </SimpleForm>
  </CreateScreen>
);

const enhance = compose(
  translate
);

export default enhance(Create);
