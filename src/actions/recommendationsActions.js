import {UPDATE} from 'react-admin';

export const RECOMMENDATION_DONE = 'RECOMMENDATION_DONE';
export const RECOMMENDATION_NOT_DONE = 'RECOMMENDATION_NOT_DONE';

export const doneRecommendation = (id, data, basePath) => ({
  type: RECOMMENDATION_DONE,
  payload: {id, data: {id: data.id, status: 'DONE'}},
  meta: {fetch: UPDATE, resource: 'recommendations'}
});

export const notDoneRecommendation = (id, data, basePath) => ({
  type: RECOMMENDATION_NOT_DONE,
  payload: {id, data: {id: data.id, status: 'NOT_DONE'}},
  meta: {fetch: UPDATE, resource: 'recommendations'}
});
