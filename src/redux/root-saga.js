import { all, call } from 'redux-saga/effects';
import { userSagas } from './user/user.sagas';
import { leaveStatusSagas } from './leaveStatus/leaveStatus.sagas';
import { remainingHoursSagas } from './employee/employee.sagas';
export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(leaveStatusSagas),
    call(remainingHoursSagas),
  ]);
}
