import React from 'react';
import {
  translate,
  List,
  Datagrid,
  TextField,
  EditButton,
  SelectField
} from 'react-admin';
import {MediaField} from '../fields';
import {ColorField} from 'react-admin-color-input';
import icons, {renderIcon} from './icons';

export default translate(({...props}) => (
  <List {...props} bulkActions={false}>
    <Datagrid>
      <TextField source="name"/>
      <TextField source="unit"/>
      <TextField source="description"/>
      <ColorField source="color" />
      <MediaField source="attachment.content_url" title="attachment.name"/>
      <SelectField source="icon" choices={icons} optionText={renderIcon}/>

      <EditButton basePath="/measurement_types"/>
    </Datagrid>
  </List>
));
