import {
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  DELETE,
  fetchUtils,
} from 'react-admin';
import {stringify} from 'qs';
import AppConfig from './../AppConfig';

const API_URL = `${AppConfig.endpoint}api`;

const mappingIriToIds = [
  {key: 'user', resource: 'users'},
  {key: 'type', resource: 'measurement_types', exclude: ['notifications']},
  {key: 'device', resource: 'devices'},
  {key: 'groups', resource: 'groups'},
  {key: 'users', resource: 'users'},
  {key: 'patients', resource: 'users'},
  {key: 'patient', resource: 'users'},
  {key: 'doctor', resource: 'users'},
  {key: 'doctors', resource: 'users'},
  {key: 'thread', resource: 'threads'},
  {key: 'created_by', resource: 'users'},
  {key: 'information_for_patients', resource: 'users'},
  {key: 'imaging_examinations', resource: 'users'},
];

const parseIdToIri = (resource, id) => {
  return `/api/${resource}/${id}`;
};

const mapIdsToIri = (object) => {
  for (let i = 0; i < mappingIriToIds.length; i++) {
    const map = mappingIriToIds[i];
    if (map.key in object && 'undefined' !== object[map.key] && null !== object[map.key]) {
      if (object[map.key] instanceof Array) {
        for (let j = 0; j < object[map.key].length; j++) {
          object[map.key][j] = parseIdToIri(map.resource, object[map.key][j]);
        }

        continue;
      }

      if ('number' === typeof object[map.key]) {
        object[map.key] = parseIdToIri(map.resource, object[map.key]);
      }
    }
  }

  return object;
};

const parseIriToId = (regexp, string) => {
  const match = regexp.exec(string);
  if ('undefined' !== match && null !== match && match.length) {
    return parseInt(match[1], 0);
  }
};

const isExcluded = (map, resource) => {
  return undefined !== map.exclude && map.exclude.includes(resource);
};

const mapIriToIds = (object, resource) => {
  for (let i = 0; i < mappingIriToIds.length; i++) {
    const map = mappingIriToIds[i];

    if (
      map.key in object &&
      'undefined' !== object[map.key] &&
      null !== object[map.key] &&
      isNaN(object[map.key]) &&
      !isExcluded(map, resource)
    ) {
      let regexp = new RegExp(`\\/api\\/${map.resource}\\/(\\d+)`);

      if (object[map.key] instanceof Array) {
        for (let j = 0; j < object[map.key].length; j++) {
          object[map.key][j] = parseIriToId(regexp, object[map.key][j]);
        }

        continue;
      }

      if ('string' === typeof object[map.key]) {
        object[map.key] = parseIriToId(regexp, object[map.key]);
      }
    }
  }

  return object;
};

const parseAnyIriToId = (id) => {
  mappingIriToIds.forEach(mapping => {
    const regexp = new RegExp(`\\/api\\/${mapping.resource}\\/(\\d+)`);
    const result = parseIriToId(regexp, id);

    id = undefined !== result ? result : id;
  });

  return id;
};

/**
 * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The REST request params, depending on the type
 * @returns {Object} { url, options } The HTTP request parameters
 */
const convertRESTRequestToHTTP = (type, resource, params) => {
  let url = '';
  const options = {
    'headers': new Headers({
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Accept': 'application/json'
    })
  };
  switch (type) {
    case GET_LIST: {
      const {page, perPage} = params.pagination;
      const {field, order} = params.sort;

      let query = {
        order: {},
        _page: JSON.stringify(page),
        _itemsPerPage: JSON.stringify(perPage),
        groups: params.groups,
        pagination: true
      };

      query.order[field] = order;
      query = {...query, ...params.filter};

      // Ugly workaround for ReferenceField without pagination :(
      if ('filter' in params && 'no_paginate' in params.filter) {
        delete query._page;
        delete query._itemsPerPage;
        delete query.pagination;
        delete query.no_paginate;
      }

      url = `${API_URL}/${resource}?${stringify(query)}`;
      break;
    }
    case GET_ONE:
      url = `${API_URL}/${resource}/${parseAnyIriToId(params.id)}`;
      break;
    case GET_MANY: {
      const query = {id: params.ids};
      url = `${API_URL}/${resource}?${stringify(query)}`;
      break;
    }
    case GET_MANY_REFERENCE: {
      const {page, perPage} = params.pagination;
      const {field, order} = params.sort;

      let query = {
        order: {},
        _page: JSON.stringify(page),
        _itemsPerPage: JSON.stringify(perPage),
        groups: params.groups
      };

      query.order[field] = order;
      query = {...query, ...params.filter};

      url = `${API_URL}/${resource}?${stringify(query)}`;
      break;
    }
    case UPDATE:
      url = `${API_URL}/${resource}/${params.id}`;
      options.method = 'PUT';
      options.body = JSON.stringify(mapIdsToIri(params.data));
      break;
    case CREATE:
      url = `${API_URL}/${resource}`;
      options.method = 'POST';
      options.body = JSON.stringify(mapIdsToIri(params.data));
      break;
    case DELETE:
      url = `${API_URL}/${resource}/${params.id}`;
      options.method = 'DELETE';
      break;
    default:
      throw new Error(`Unsupported fetch action type ${type}`);
  }

  return {url, options};
};

/**
 * @param {Object} response HTTP response from fetch()
 * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The REST request params, depending on the type
 * @returns {Object} REST response
 */
const convertHTTPResponseToREST = (response, type, resource, params) => {
  const {json, headers} = response;

  switch (type) {
    case GET_ONE:
      return {
        data: mapIriToIds(json, resource)
      };
    case GET_MANY_REFERENCE:
    case GET_LIST:
      return {
        data: json.map(item => mapIriToIds(item, resource)),
        total: parseInt(headers.has('content-range') ? headers.get('content-range') : json.length, 10),
      };
    case GET_MANY:
      return {
        data: json.map(item => mapIriToIds(item, resource))
      };
    case CREATE:
      return {data: mapIriToIds({...params.data, id: json.id}, resource)};
    case UPDATE:
      return {data: mapIriToIds(json, resource)};
    default:
      return {data: mapIriToIds(json, resource)};
  }
};

/**
 * @param {string} type Request type, e.g GET_LIST
 * @param {string} resource Resource name, e.g. "posts"
 * @param {Object} payload Request parameters. Depends on the request type
 * @returns {Promise} the Promise for a REST response
 */
export default (type, resource, payload) => {
  const {fetchJson} = fetchUtils;
  const {url, options} = convertRESTRequestToHTTP(type, resource, payload);
  return fetchJson(url, options)
    .then(response => convertHTTPResponseToREST(response, type, resource, payload));
};
