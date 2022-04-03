import 'moment/locale/pl';

import {GET_LIST} from 'react-admin';
import restClient from '../providers/rest';

export default ({userId = null, resource, typeId, from, to}) => {
  let dateField;

  switch (resource) {
    case 'measurements':
      dateField = {created: {after: from.format(), before: to.format()}};
      break;
    case 'recommendations':
      dateField = {at: {before: to.format()}, ends: {after: from.format()}};
      break;
    default:
      break;
  }

  let params = {filter: {...{type: typeId}, ...dateField}, pagination: {page: 1, perPage: 100}, sort: {field: 'id', order: 'asc'}};

  if (null !== userId) {
    params.filter.user = userId;
  }

  return restClient(GET_LIST, resource, params);
}
