import LeaveTypeActionTypes from './leaveType.types.js';

export const loadDataStart = () => ({
  type: LeaveTypeActionTypes.LOAD_START
});
export const loadDataSuccess = leaveType => ({
  type: LeaveTypeActionTypes.LOAD_SUCCESS,
  payload: leaveType
});
export const loadDataFail = error => ({
  type: LeaveTypeActionTypes.LOAD_FAILURE,
  payload: error
});
