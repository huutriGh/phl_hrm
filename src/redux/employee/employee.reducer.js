
import EmployeeActionTypes from './employee.types';

const INITIAL_STATE = {
  remainingHours: null,
  error: null,
};

const employeeActionTypesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EmployeeActionTypes.LOAD_REMAINING_HOURS_SUCCESS:
      return {
        ...state,
        remainingHours: action.payload,
        error: null,
      };
    case EmployeeActionTypes.LOAD_REMAINING_HOURS_FAILURE:
      return {
        ...state,
        remainingHours: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default employeeActionTypesReducer;
