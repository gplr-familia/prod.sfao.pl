import React from 'react';
import {List, Datagrid, DateField, ReferenceField, TextField} from 'react-admin';
import FullNameField from '../fields/FullNameField';

const dateOptions = {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};

export default (props) => (
    <List {...props} bulkActions={false}>
        <Datagrid>
            <ReferenceField source="user" reference="users">
                <FullNameField source="fullname"/>
            </ReferenceField>
            <TextField source="description"/>
            <DateField source="starts" locales="pl" options={dateOptions}/>
            <DateField source="ends" locales="pl" options={dateOptions}/>
        </Datagrid>
    </List>
);
