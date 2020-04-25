import { createSelector } from 'reselect';
const selectEmployee = (state) => state.employee;

export const selectRemainingHours = createSelector(
  [selectEmployee],
  (employee) => employee.remainingHours
);
export const selectAssignee = createSelector(
  [selectEmployee],
  (employee) => employee.assignee
);
