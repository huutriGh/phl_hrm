import { all, call, put, takeLatest } from 'redux-saga/effects';

import { loadDataSuccess, loadDataFail } from './leaveStatus.actions';
import LeaveStatusActionTypes from './leaveStatus.types.js';
import { loadLeaveStatus } from '../../api/api.utils';

export function* getLeaveStatus() {
  try {
    const res = yield call(loadLeaveStatus);
    yield put(loadDataSuccess(res.data));
  } catch (error) {
    yield put(loadDataFail(error));
  }
}

export function* onGetLeaveStatus() {
  yield takeLatest(LeaveStatusActionTypes.LOAD_START, getLeaveStatus);
}

export function* leaveStatusSagas() {
  yield all([call(onGetLeaveStatus)]);
}
