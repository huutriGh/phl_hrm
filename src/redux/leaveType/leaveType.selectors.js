import { createSelector } from 'reselect';
const selectLeaveType = state =>state.leaveType;

export const selectCurrentLeaveType = createSelector(
    [selectLeaveType],
    leaveType => leaveType.leaveType
)
