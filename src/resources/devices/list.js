import React from 'react';
import {List, Datagrid, TextField, EditButton} from 'react-admin';

export default (props) => (
    <List {...props} bulkActions={false}>
        <Datagrid>
            <TextField source="name"/>
            <TextField source="description"/>
            <EditButton/>
        </Datagrid>
    </List>
);
