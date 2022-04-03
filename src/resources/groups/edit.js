import React from 'react';
import {
  translate,
  required,
  Edit,
  SimpleForm,
  TextInput,
  DisabledInput,
  SelectArrayInput,
  ReferenceArrayInput
} from 'react-admin';
import const_roles from './const_roles';
import {withStyles} from '@material-ui/core/styles';
import RichTextInput from 'ra-input-rich-text';

const styles = {
  roles: {width: '100%'},
  description: {width: '100%'}
};

const GroupTitle = translate(({translate, record}) => {
  return <span>{`${translate('resources.groups.name', 5)} ${record.name}`}</span>;
});

export default withStyles(styles)(({permissions, classes, ...props}) => (
  <Edit title={<GroupTitle/>} {...props}>
    <SimpleForm>
      <DisabledInput source="id"/>
      <TextInput source="name" validate={required()}/>
      <SelectArrayInput className={classes.roles} source="roles" choices={const_roles} options={{autoWidth: false}}/>
      <RichTextInput source="description"/>
      {permissions && permissions.includes('GROUPS_EDIT_USERS') &&
      <ReferenceArrayInput filter={{no_paginate: true}} source="users" reference="users">
        <SelectArrayInput optionText="fullname"/>
      </ReferenceArrayInput>
      }
    </SimpleForm>
  </Edit>
));
