import {GET_LIST} from 'react-admin';
import restClient from '../providers/rest';

export default () => {
  const params = {
    filter: {},
    pagination: {page: 1, perPage: 3},
    sort: {}
  };

  return restClient(GET_LIST, 'threads/my/dashboard', params);
}