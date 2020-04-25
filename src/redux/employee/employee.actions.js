import EmloyeeActionTypes from './employee.types';

export const loadRemainingHoursStart = () => ({
  type: EmloyeeActionTypes.LOAD_REMAINING_HOURS_START,
});
export const loadRemainingHoursSuccess = (leaveStatus) => ({
  type: EmloyeeActionTypes.LOAD_REMAINING_HOURS_SUCCESS,
  payload: leaveStatus,
});
export const loadRemainingHoursFail = (error) => ({
  type: EmloyeeActionTypes.LOAD_REMAINING_HOURS_FAILURE,
  payload: error,
});
export const loadAssigneeStart = () => ({
  type: EmloyeeActionTypes.LOAD_ASSIGNEE_START,
});
export const loadAssigneeSuccess = (assignee) => ({
  type: EmloyeeActionTypes.LOAD_LOAD_ASSIGNEE_SUCCESS,
  payload: assignee,
});
export const loadAssigneeFail = (error) => ({
  type: EmloyeeActionTypes.LOAD_LOAD_ASSIGNEE_FAILURE,
  payload: error,
});
