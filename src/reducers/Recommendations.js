import moment from 'moment';
import 'moment/locale/pl';

import {GET_LIST} from 'react-admin';
import restClient from '../providers/rest';

export default ({userId, filter = {}}) => {
  const params = {
    filter: {
      at: {
        after: moment().startOf('day').format(), before: moment().endOf('day').format()
      },
      ...filter,
    },
    pagination: {
      page: 1,
      perPage: 3
    },
    sort: {
      field: 'at',
      order: 'desc'
    },
    groups: [
      'measurement_type'
    ]
  };

  if ('undefined' !== userId) {
    params.filter.user = userId;
  }

  return restClient(GET_LIST, 'recommendations', params);
}
