import EmloyeeActionTypes from './employee.types';

export const loadRemainingHoursStart = () => ({
  type: EmloyeeActionTypes.LOAD_REMAINING_HOURS_START
});
export const loadRemainingHoursSuccess = leaveStatus => ({
  type: EmloyeeActionTypes.LOAD_REMAINING_HOURS_SUCCESS,
  payload: leaveStatus
});
export const loadRemainingHoursFail = error => ({
  type: EmloyeeActionTypes.LOAD_REMAINING_HOURS_FAILURE,
  payload: error
});
