import { createSelector } from 'reselect';
const selectLeaveStatus = state =>state.leaveStatus;

export const selectCurrentLeaveStatus = createSelector(
    [selectLeaveStatus],
    leaveStatus => leaveStatus
)
