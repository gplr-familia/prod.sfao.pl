import React from 'react';
import {ReferenceFieldController, ReferenceArrayField} from 'react-admin';

const ReferenceThroughManyField = ({throughReference, throughSource, reference, resource, children, ...props}) =>
  <ReferenceFieldController
    {...props}
    reference={throughReference}
    source={throughSource}
    linkType={false}
  >
    {({referenceRecord, ...props}) => (
      <ReferenceArrayField
        basePath={`/${resource}`}
        resource={resource}
        reference={reference}
        source={reference}
        record={referenceRecord || {}}
        linkType={false}
      >
        {children}
      </ReferenceArrayField>
    )}
  </ReferenceFieldController>;

export default ReferenceThroughManyField;
