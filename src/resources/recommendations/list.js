import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  DateField,
  Filter,
  SelectInput,
  ReferenceInput,
  SelectField,
  DateInput,
  SingleFieldList,
  ChipField,
  translate
} from 'react-admin';
import FullNameField from './../fields/FullNameField';
import ReferenceThroughManyField from '../../components/fields/ReferenceThroughManyField';

const dateOptions = {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};

const Filters = translate(({translate, permissions, ...props}) => <Filter {...props}>
  {permissions && permissions.includes('RECOMMENDATIONS_LIST_USERS') &&
  <ReferenceInput filter={{no_paginate: true}} source="user" reference="users">
    <SelectInput optionText="fullname"/>
  </ReferenceInput>}
  {permissions && permissions.includes('RECOMMENDATIONS_LIST_USER_IN_GROUPS') &&
  <ReferenceInput filter={{no_paginate: true}} source="user_in_groups" reference="groups">
    <SelectInput optionText="name"/>
  </ReferenceInput>}
  <ReferenceInput filter={{no_paginate: true}} source="type" reference="measurement_types">
    <SelectInput optionText="name"/>
  </ReferenceInput>
  <DateInput source="at" />
  <SelectInput source="status" choices={[
    {id: 'EVALUATE', name: translate('resources.recommendations.custom.status.evaluate')},
    {id: 'DONE', name: translate('resources.recommendations.custom.status.done')},
    {id: 'NOT_DONE', name: translate('resources.recommendations.custom.status.not_done')},
  ]}/>
</Filter>);

export default translate(({translate, permissions, ...props}) => (<List {...props} filters={<Filters permissions={permissions}/>} bulkActions={false}>
  <Datagrid>
    {permissions && permissions.includes('RECOMMENDATIONS_LIST_USERS') &&
    <ReferenceField source="user" reference="users">
      <FullNameField source="fullname"/>
    </ReferenceField>}

    {permissions && permissions.includes('RECOMMENDATIONS_LIST_USER_IN_GROUPS') &&
    <ReferenceThroughManyField throughReference="users" throughSource="user" resource="groups" reference="groups" source="groups">
      <SingleFieldList>
        <ChipField source="name" />
      </SingleFieldList>
    </ReferenceThroughManyField>}

    <ReferenceField source="type" reference="measurement_types">
      <TextField source="name"/>
    </ReferenceField>

    <TextField source="value"/>
    <DateField source="at" locales="pl" options={dateOptions}/>

    <ReferenceField source="created_by" reference="users">
      <FullNameField source="fullname"/>
    </ReferenceField>

    <SelectField source="status" choices={[
      {id: 'EVALUATE', name: translate('resources.recommendations.custom.status.evaluate')},
      {id: 'DONE', name: translate('resources.recommendations.custom.status.done')},
      {id: 'NOT_DONE', name: translate('resources.recommendations.custom.status.not_done')},
    ]} />

    {permissions && permissions.includes('RECOMMENDATIONS_EDIT') &&
    <EditButton basePath="/recommendations"/>}
  </Datagrid>
</List>));
