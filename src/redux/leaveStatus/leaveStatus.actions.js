import LeaveStatusActionTypes from './leaveStatus.types';

export const loadDataStart = () => ({
  type: LeaveStatusActionTypes.LOAD_START
});
export const loadDataSuccess = leaveStatus => ({
  type: LeaveStatusActionTypes.LOAD_SUCCESS,
  payload: leaveStatus
});
export const loadDataFail = error => ({
  type: LeaveStatusActionTypes.LOAD_FAILURE,
  payload: error
});
