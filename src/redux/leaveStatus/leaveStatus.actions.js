import LeaveStatusActionTypes from './leaveStatus.types';

export const loadDataStart = (token) => ({
  type: LeaveStatusActionTypes.LOAD_START,
  payload: token,
});
export const loadDataSuccess = (leaveStatus) => ({
  type: LeaveStatusActionTypes.LOAD_SUCCESS,
  payload: leaveStatus,
});
export const loadDataFail = (error) => ({
  type: LeaveStatusActionTypes.LOAD_FAILURE,
  payload: error,
});
