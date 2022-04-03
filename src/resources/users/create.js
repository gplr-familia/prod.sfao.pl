import React from 'react';
import {Create, SimpleForm, TextInput, DateInput, SelectInput} from 'react-admin';

export default (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="email"/>
      <TextInput source="username"/>
      <TextInput source="fullname"/>
      <TextInput source="plain_password"/>
      <DateInput source="date_of_birth"/>
      <SelectInput source="gender" choices={[
        { id: 'male', name: 'resources.users.custom.options.gender.male' },
        { id: 'female', name: 'resources.users.custom.options.gender.female' },
      ]} />
      <TextInput source="phone"/>
    </SimpleForm>
  </Create>
);
