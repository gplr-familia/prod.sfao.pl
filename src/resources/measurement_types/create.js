import React from 'react';
import {translate, required, Create, SimpleForm, TextInput, FileInput, FileField, LongTextInput, SelectInput} from 'react-admin';
import {ColorInput} from 'react-admin-color-input';
import icons, {renderIcon} from './icons';

export default translate(({translate, ...props}) => (
  <Create {...props}>
      <SimpleForm>
        <TextInput source="name" validate={required()}/>
        <TextInput source="unit"/>
        <LongTextInput source="description"/>
        <ColorInput source="color" picker="Photoshop"/>
        <SelectInput source="icon" choices={icons} optionText={renderIcon}/>

        <FileInput source="attachment">
          <FileField source="attachment" title="title"/>
        </FileInput>
      </SimpleForm>
  </Create>
));
