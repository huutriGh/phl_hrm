import LeaveStatusActionTypes from './leaveStatus.types';

const INITIAL_STATE = {
  leaveStatus: null,
  error: null,
};

const leaveStatusReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LeaveStatusActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        leaveStatus: action.payload,
        error: null,
      };
    case LeaveStatusActionTypes.LOAD_FAILURE:
      return {
        ...state,
        leaveStatus: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default leaveStatusReducer;
