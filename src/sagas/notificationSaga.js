import {takeEvery, put} from 'redux-saga/effects';
import {crudGetList} from 'react-admin';
import moment from 'moment';

function* fetchNotifications() {
  if (localStorage.getItem('token')) {
    yield put(crudGetList('notifications', {page: 1, perPage: 10}, {field: 'at', order: 'desc'}, {
      status: 'CREATED',
      at: {before: moment().add(2, 'day').format('YYYY-MM-DD')},
      user: '/api/users/' + localStorage.getItem('id')
    }));
  }
}

export default function* notificationSaga() {
  yield takeEvery(['@@router/LOCATION_CHANGE', 'NOTIFICATION_DECLINE_SUCCESS', 'NOTIFICATION_CONFIRM_SUCCESS'], fetchNotifications);
}
