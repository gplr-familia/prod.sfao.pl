import {CREATE, UPDATE} from 'react-admin'
import AppConfig from './../AppConfig';

const supported = [
  {resource: 'recommendations', field: 'attachment'},
  {resource: 'messages/send', field: 'attachment'},
  {resource: 'information_for_patients', field: 'attachment'},
  {resource: 'imaging_examinations', field: 'attachment'},
  {resource: 'measurement_types', field: 'attachment'},
];

const addUploadFeature = requestHandler => (type, resource, params) => {
  if (CREATE === type || UPDATE === type) {
    for (let support of supported) {
      if (support.resource === resource && undefined !== params.data[support.field] && null !== params.data[support.field]) {
        const form = new FormData();
        form.append('file', params.data[support.field].rawFile);

        return fetch(`${AppConfig.endpoint}api/media_objects`, {
          method: 'POST',
          body: form,
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        })
          .then(response => response.json())
          .then(data => requestHandler(type, resource, {
            ...params,
            data: {
              ...params.data,
              [support.field]: `/api/media_objects/${data.id}`
            }
          }));
      }
    }
  }

  return requestHandler(type, resource, params);
};

export default addUploadFeature;
