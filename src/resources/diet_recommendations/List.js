import React from 'react';
import {List, Datagrid, EditButton, DateField, ReferenceField, TextField} from 'react-admin';
import FullNameField from '../fields/FullNameField';

const dateOptions = {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};

export default (props) => (
    <List {...props} bulkActions={false}>
        <Datagrid>
            <ReferenceField source="user" reference="users">
                <FullNameField source="fullname"/>
            </ReferenceField>
            <TextField source="description"/>
            <DateField source="at" locales="pl" options={dateOptions}/>
            <EditButton/>
        </Datagrid>
    </List>
);
