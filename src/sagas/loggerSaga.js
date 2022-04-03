import {takeEvery} from 'redux-saga/effects';

function* log(action) {
  // yield console.log(action);
}

export default function* loggerSaga() {
  yield takeEvery('*', log);
}
