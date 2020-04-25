import { all, call, put, takeLatest } from 'redux-saga/effects';

import EmloyeeActionTypes from './employee.types.js';
import { loadRemainingHours, loadAssignee } from '../../api/api.utils';
import {
  loadRemainingHoursSuccess,
  loadRemainingHoursFail,
  loadAssigneeSuccess,
  loadAssigneeFail,
} from './employee.actions';

export function* getRemainingHours() {
  try {
    const res = yield call(loadRemainingHours);
    yield put(loadRemainingHoursSuccess(res.data));
  } catch (error) {
    yield put(loadRemainingHoursFail(error));
  }
}

export function* onGetRemainingHours() {
  yield takeLatest(
    EmloyeeActionTypes.LOAD_REMAINING_HOURS_START,
    getRemainingHours
  );
}
export function* getAssignee() {
  try {
    const res = yield call(loadAssignee);
    yield put(loadAssigneeSuccess(res.data));
  } catch (error) {
    yield put(loadAssigneeFail(error));
  }
}

export function* onGetAssignee() {
  yield takeLatest(EmloyeeActionTypes.LOAD_ASSIGNEE_START, getAssignee);
}

export function* employeeSagas() {
  yield all([call(onGetRemainingHours), call(onGetAssignee)]);
}
