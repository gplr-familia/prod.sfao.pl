import React from 'react';
import {translate, required, Create, SimpleForm, SelectInput, NumberInput, ReferenceInput} from 'react-admin';
import {DateTimeInput} from 'react-admin-date-inputs';
import {MeasurementTypeSelectInput} from './../fields';

export default translate(({permissions, translate, ...props}) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput filter={{no_paginate: true}} source="type" reference="measurement_types" validate={required()}>
                <SelectInput optionText={<MeasurementTypeSelectInput/>}/>
            </ReferenceInput>
            <ReferenceInput filter={{no_paginate: true}} source="device" reference="devices">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <NumberInput source="value" validate={required()}/>
            <DateTimeInput
                source="at"
                locale="pl"
                label={translate('resources.measurements.fields.at')}
                validate={required()}/>
            {permissions && permissions.includes('MEASUREMENTS_CREATE_USERS') &&
            <ReferenceInput filter={{no_paginate: true}} source="user" reference="users" validate={required()}>
                <SelectInput optionText="fullname"/>
            </ReferenceInput>}
        </SimpleForm>
    </Create>
));
