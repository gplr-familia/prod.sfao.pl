import {UPDATE} from 'react-admin';

export const NOTIFICATIONS_TOGGLE_DRAWER = 'NOTIFICATIONS_TOGGLE_DRAWER';
export const NOTIFICATION_DECLINE = 'NOTIFICATION_DECLINE';
export const NOTIFICATION_CONFIRM = 'NOTIFICATION_CONFIRM';

export const toggleDrawer = () => ({type: NOTIFICATIONS_TOGGLE_DRAWER});

export const confirmNotification = (id, data, basePath) => ({
  type: NOTIFICATION_CONFIRM,
  payload: {id, data: {...data, status: 'CONFIRMED'}},
  meta: {fetch: UPDATE, resource: 'notifications'}
});

export const declineNotification = (id, data, basePath) => ({
  type: NOTIFICATION_DECLINE,
  payload: {id, data: {...data, status: 'DECLINED'}},
  meta: {fetch: UPDATE, resource: 'notifications'}
});
