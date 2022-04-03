import moment from 'moment';
import 'moment/locale/pl';

import {GET_LIST} from 'react-admin';
import restClient from '../providers/rest';

export default ({userId}) => {
  const params = {
    filter: {
      at: {
        after: moment().startOf('day').format(), before: moment().endOf('day').format()
      }
    },
    pagination: {
      page: 1,
      perPage: 3
    },
    sort: {
      field: 'at',
      order: 'desc'
    },
  };

  if ('undefined' !== userId) {
    params.filter.patient = userId;
  }

  return restClient(GET_LIST, 'appointments', params);
}
