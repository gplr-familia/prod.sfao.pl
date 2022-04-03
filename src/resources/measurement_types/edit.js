import React from 'react';
import {
  required,
  Edit,
  SimpleForm,
  DisabledInput,
  TextInput,
  LongTextInput,
  FileInput,
  SelectInput
} from 'react-admin';
import {MediaField} from '../fields';
import {ColorInput} from 'react-admin-color-input';
import icons, {renderIcon} from './icons';

const MeasurementTitle = ({record}) => {
  return <span>{`${record.name}`}</span>;
};

export default (props) => (
  <Edit title={<MeasurementTitle />} {...props}>
      <SimpleForm>
        <DisabledInput source="id"/>
        <TextInput source="name" validate={required()}/>
        <TextInput source="unit"/>
        <LongTextInput source="description"/>
        <ColorInput source="color" picker="Photoshop" />
        <SelectInput source="icon" choices={icons} optionText={renderIcon}/>

        <FileInput source="attachment">
          <MediaField source="content_url" title="name" />
        </FileInput>
      </SimpleForm>
  </Edit>
);
