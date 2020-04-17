import { all, call, put, takeLatest } from 'redux-saga/effects';

import EmloyeeActionTypes from './employee.types.js';
import { loadRemainingHours } from '../../api/api.utils';
import {
  loadRemainingHoursSuccess,
  loadRemainingHoursFail,
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

export function* remainingHoursSagas() {
  yield all([call(onGetRemainingHours)]);
}
