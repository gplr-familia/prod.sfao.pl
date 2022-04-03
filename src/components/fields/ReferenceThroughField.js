import React from 'react';
import {ReferenceFieldController, ReferenceField} from 'react-admin';

const ReferenceThroughField = ({throughReference, throughSource, reference, resource, source, children, ...props}) =>
  <ReferenceFieldController
    {...props}
    reference={throughReference}
    source={throughSource}
    linkType={false}
  >
    {({referenceRecord, ...props}) => (
      <ReferenceField
        basePath={`/${resource}`}
        resource={resource}
        reference={reference}
        source={source}
        record={referenceRecord || {}}
        linkType={false}
      >
        {children}
      </ReferenceField>
    )}
  </ReferenceFieldController>;

export default ReferenceThroughField;
