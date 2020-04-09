import LeaveTypeActionTypes from './leaveType.types';

const INITIAL_STATE = {
  leaveType: null,
  error: null
};

const leaveTypeReducer = (state = INITIAL_STATE, action) => {
  switch (action) {
    case LeaveTypeActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        leaveType: action.payload,
        error: null
      };
    case LeaveTypeActionTypes.LOAD_FAILURE:
      return {
        ...state,
        leavetype: null,
        error: action.payload
      };

    default:
      return state;
  }
};

export default leaveTypeReducer;
