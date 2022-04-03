import React from 'react';
import {translate, Edit, SimpleForm, TextInput, DisabledInput, BooleanInput, SelectInput, SelectArrayInput, DateInput, ReferenceArrayInput} from 'react-admin';

const UserTitle = translate(({translate, record}) => {
  return <span>{`${translate('resources.users.name', 5)} ${record.fullname ? `${record.fullname}` : `${record.email}`}`}</span>;
});

export default ({permissions, ...props}) => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id"/>
      <DisabledInput source="email"/>
      <TextInput source="fullname"/>
      <DisabledInput source="username"/>
      <DateInput source="date_of_birth"/>
      <SelectInput source="gender" choices={[
        { id: 'male', name: 'resources.users.custom.options.gender.male' },
        { id: 'female', name: 'resources.users.custom.options.gender.female' },
      ]} />
      <TextInput source="phone"/>
      <BooleanInput source="enabled"/>
      {permissions && permissions.includes('USERS_EDIT_PATIENTS') &&
      <ReferenceArrayInput filter={{no_paginate: true}} source="patients" reference="users">
        <SelectArrayInput optionText="fullname"/>
      </ReferenceArrayInput>
      }
    </SimpleForm>
  </Edit>
);
