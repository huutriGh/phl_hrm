import { all, call, put, takeLatest } from 'redux-saga/effects';

import { loadDataSuccess, loadDataFail } from './leaveType.actions';
import LeaveTypeActionTypes from './leaveType.types';
import { loadLeaveType } from './../../api/api.utils';

export function* getLeaveType({ payload: token }) {
  try {
    const res = yield call(loadLeaveType, token);
    const leaveType = {
      id: res.data.LeaveTypeId,
      description: res.data.Description,
    };
    yield put(loadDataSuccess(leaveType));
  } catch (error) {
    yield put(loadDataFail(error));
  }
}

export function* onGetLeaveType() {
  yield takeLatest(LeaveTypeActionTypes.LOAD_START, getLeaveType);
}

export function* leaveTypeSagas() {
  yield all([call(onGetLeaveType)]);
}
