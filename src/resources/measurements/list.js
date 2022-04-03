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
    SingleFieldList,
    ChipField
} from 'react-admin';
import FullNameField from './../fields/FullNameField';
import ReferenceThroughManyField from '../../components/fields/ReferenceThroughManyField';

const dateOptions = {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};

const Filters = ({permissions, ...props}) =>
    <Filter {...props}>
        {permissions && permissions.includes('MEASUREMENTS_LIST_USERS') &&
        <ReferenceInput filter={{no_paginate: true}} source="user" reference="users">
            <SelectInput optionText="fullname"/>
        </ReferenceInput>}
        {permissions && permissions.includes('MEASUREMENTS_LIST_USER_IN_GROUPS') &&
        <ReferenceInput filter={{no_paginate: true}} source="user_in_groups" reference="groups">
            <SelectInput optionText="name"/>
        </ReferenceInput>}
        <ReferenceInput filter={{no_paginate: true}} source="type" reference="measurement_types">
            <SelectInput optionText="name"/>
        </ReferenceInput>
    </Filter>;

export default ({permissions, ...props}) => (
    <List {...props} filters={<Filters/>} bulkActions={false}>
        <Datagrid>
            {permissions && permissions.includes('MEASUREMENTS_LIST_USERS') &&
            <ReferenceField source="user" reference="users">
                <FullNameField source="fullname"/>
            </ReferenceField>}

            {permissions && permissions.includes('MEASUREMENTS_LIST_USER_IN_GROUPS') &&
            <ReferenceThroughManyField throughReference="users" throughSource="user" resource="groups" reference="groups" source="groups">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceThroughManyField>}

            <ReferenceField source="type" reference="measurement_types">
                <TextField source="name"/>
            </ReferenceField>

            <ReferenceField source="device" reference="devices">
                <TextField source="name"/>
            </ReferenceField>

            <TextField source="value"/>

            <DateField source="at" locales="pl" options={dateOptions}/>
            <EditButton/>
        </Datagrid>
    </List>
);
