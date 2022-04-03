import React from 'react';
import {translate, Edit, SimpleForm, DisabledInput} from 'react-admin';
import {DateTimeInput} from 'react-admin-date-inputs';
import plLocale from 'date-fns/locale/pl';

export default translate(({translate, ...props}) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="body"/>
            <DateTimeInput
                source="created_at"
                providerOptions={{locale: plLocale}}
                label={translate('resources.messages.fields.created_at')}/>
        </SimpleForm>
    </Edit>
));
